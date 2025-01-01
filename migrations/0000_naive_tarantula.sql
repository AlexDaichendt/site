CREATE TABLE `cv` (
	`uuid` text PRIMARY KEY NOT NULL,
	`company_name` text NOT NULL,
	`created` integer,
	`author` text NOT NULL,
	`created_for` text NOT NULL,
	`status` text DEFAULT 'pending'
);
