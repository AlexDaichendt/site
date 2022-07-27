import Link from '../components/Link.svelte';
import Table from '../components/Table.svelte';
import Code from '../components/Code.svelte';
import ListItem from '../components/ListItem.svelte';
import Divider from '../components/Divider.svelte';
import sup from '../components/sup.svelte';

const components = {
	a: Link,
	table: Table,
	code: Code,
	li: ListItem,
	hr: Divider,
	sup,
};

export default components;
