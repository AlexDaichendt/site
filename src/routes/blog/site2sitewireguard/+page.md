---
created: '2022-09-27'
title: 'Site 2 Site Wireguard VPN with a Mikrotik Router and a Cloud VM'
description: ''
keywords:
  - cloud
  - Mikrotik
  - site 2 site
  - wireguard
  - vpn
---

<script>
import architecture from "./images/_architecture.drawio.png?width=360;720;1280;1920&webp&metadata"
import peer from "./images/mikrotik_peer.png?width=360;720;1280;1920&webp&metadata"

import Image from "$components/Image.svelte"
</script>

My network consists of a server located in country A. Since the largest ISP in the country
B does have terrible peering with the ISP in country A, I thought of setting up a small
proxy server in country A. This way, I should be able to bypass bad peering, since the
cloud provider probably organizes good routing to both sides. Since I meant to try out
Oracles free tier anyway, it seemed like a good opportunity to learn ansible properly and
develop with IaC scripts to set up a reverse proxy in the cloud.

<Image meta={architecture} />

1. Create Wireguard keys. If the CLI is not an option [this
   website](https://www.wireguardconfig.com/) is cool too (keys are client-sided generated)
2. Since I want to have dedicated monitoring for what traffic is flowing between the proxy
   and my server, I create a new Wireguard interface in my Mikrotik router. Remember to
   use the previously generated keypairs.
3. Create a new peer as follows. Important is the entry to allow the IP address of the
cloud wg endpoint, otherwise the cloud cant ping back home.
<div style="max-width:600px">
    <Image meta={peer} />
</div>
4. I had to adjust the firewall rules to allow communication with the tunnel network.
5. On the proxy server we use similar settings. Interestingly enough, the Mikrotik wg
   endpoint grabs the network address of the 10.222.0.0/30 network. Meaning, 10.222.0.1 is
   unallocated.

```
[Interface]
PrivateKey = REDACTED
Address = 10.222.0.2/30
ListenPort = 23xxx

[Peer]
PublicKey = REDACTED
AllowedIPs = 10.10.0.0/16,10.222.0.0/32
Endpoint = alphard.abc.de:23xxx
```

6. Next, we need to create a DDNS updater to keep our A record in sync with the publicly
   assigned IP address of the cloud provider (unless you wanna pay for a static address of
   course). I found [this](https://hub.docker.com/r/oznu/cloudflare-ddns/) Docker
   container to be convenient.
7. Finally, we need to update the IP address of the peer in the Mikrotik router. For that
   we use a Mikrotik script, which I stole from [Uli
   Koehler](https://techoverflow.net/2021/12/29/how-to-update-wireguard-peer-endpoint-address-using-dns-on-mikrotik-routeros/). Remember to add a scheduler to the script.

```
:if ([interface wireguard peers get number=[find comment=belka] value-name=endpoint-address] != [resolve belka.abc.de]) do={
    interface wireguard peers set number=[find comment=belka] endpoint-address=[/resolve belka.abc.de]
}
```
