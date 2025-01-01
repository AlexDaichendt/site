PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_cv` (
	`uuid` text PRIMARY KEY NOT NULL,
	`company_name` text NOT NULL,
	`created` integer,
	`author` text NOT NULL,
	`purpose` text NOT NULL,
	`tooling` text NOT NULL,
	`status` text DEFAULT 'active'
);
--> statement-breakpoint
INSERT INTO `__new_cv`("uuid", "company_name", "created", "author", "purpose", "tooling", "status") SELECT "uuid", "company_name", "created", "author", "purpose", "tooling", "status" FROM `cv`;--> statement-breakpoint
DROP TABLE `cv`;--> statement-breakpoint
ALTER TABLE `__new_cv` RENAME TO `cv`;--> statement-breakpoint
PRAGMA foreign_keys=ON;