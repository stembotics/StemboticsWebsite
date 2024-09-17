declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"admin": {
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "admin";
  data: any
} & { render(): Render[".mdx"] };
};
"blog": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-1.md": {
	id: "post-1.md";
  slug: "post-1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-10.mdx": {
	id: "post-10.mdx";
  slug: "post-10";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-11.mdx": {
	id: "post-11.mdx";
  slug: "post-11";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-12.mdx": {
	id: "post-12.mdx";
  slug: "post-12";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-2.mdx": {
	id: "post-2.mdx";
  slug: "post-2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-3.mdx": {
	id: "post-3.mdx";
  slug: "post-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-4.mdx": {
	id: "post-4.mdx";
  slug: "post-4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-5.mdx": {
	id: "post-5.mdx";
  slug: "post-5";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-6.mdx": {
	id: "post-6.mdx";
  slug: "post-6";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-7.mdx": {
	id: "post-7.mdx";
  slug: "post-7";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-8.mdx": {
	id: "post-8.mdx";
  slug: "post-8";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"post-9.mdx": {
	id: "post-9.mdx";
  slug: "post-9";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"careers": {
"-index.mdx": {
	id: "-index.mdx";
  slug: "-index";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"3d-animaions-rendering.mdx": {
	id: "3d-animaions-rendering.mdx";
  slug: "3d-animaions-rendering";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"3dmodelandprint.mdx": {
	id: "3dmodelandprint.mdx";
  slug: "3dmodelandprint";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"advanced-robotics.mdx": {
	id: "advanced-robotics.mdx";
  slug: "advanced-robotics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"aerospace-basics.mdx": {
	id: "aerospace-basics.mdx";
  slug: "aerospace-basics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"app-dev.mdx": {
	id: "app-dev.mdx";
  slug: "app-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"applied-math-in-tech.mdx": {
	id: "applied-math-in-tech.mdx";
  slug: "applied-math-in-tech";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"ar-dev.mdx": {
	id: "ar-dev.mdx";
  slug: "ar-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"ar-vr-game-dev.mdx": {
	id: "ar-vr-game-dev.mdx";
  slug: "ar-vr-game-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"astronomy-stargazing.mdx": {
	id: "astronomy-stargazing.mdx";
  slug: "astronomy-stargazing";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"astrophysics.mdx": {
	id: "astrophysics.mdx";
  slug: "astrophysics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"basics-of-rocketry.mdx": {
	id: "basics-of-rocketry.mdx";
  slug: "basics-of-rocketry";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"big-data-cloud-computing.mdx": {
	id: "big-data-cloud-computing.mdx";
  slug: "big-data-cloud-computing";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"biochem.mdx": {
	id: "biochem.mdx";
  slug: "biochem";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"biomedical-engineering.mdx": {
	id: "biomedical-engineering.mdx";
  slug: "biomedical-engineering";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"biotech-beginners.mdx": {
	id: "biotech-beginners.mdx";
  slug: "biotech-beginners";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"building-auto-robots.mdx": {
	id: "building-auto-robots.mdx";
  slug: "building-auto-robots";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"chem-engineering-basics.mdx": {
	id: "chem-engineering-basics.mdx";
  slug: "chem-engineering-basics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"climate-science.mdx": {
	id: "climate-science.mdx";
  slug: "climate-science";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"data-decision-making.mdx": {
	id: "data-decision-making.mdx";
  slug: "data-decision-making";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"digital-art-animation.mdx": {
	id: "digital-art-animation.mdx";
  slug: "digital-art-animation";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"drone-programming.mdx": {
	id: "drone-programming.mdx";
  slug: "drone-programming";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"ecology-ecosystems.mdx": {
	id: "ecology-ecosystems.mdx";
  slug: "ecology-ecosystems";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"electricalbasics.mdx": {
	id: "electricalbasics.mdx";
  slug: "electricalbasics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"electromagnetism.mdx": {
	id: "electromagnetism.mdx";
  slug: "electromagnetism";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"enviro-chem.mdx": {
	id: "enviro-chem.mdx";
  slug: "enviro-chem";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"example-template.mdx": {
	id: "example-template.mdx";
  slug: "example-template";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"fll-comp-pack.mdx": {
	id: "fll-comp-pack.mdx";
  slug: "fll-comp-pack";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"fll-learning-plan.mdx": {
	id: "fll-learning-plan.mdx";
  slug: "fll-learning-plan";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"game-dev.mdx": {
	id: "game-dev.mdx";
  slug: "game-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"geneticsandevo.mdx": {
	id: "geneticsandevo.mdx";
  slug: "geneticsandevo";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"human-aandp.mdx": {
	id: "human-aandp.mdx";
  slug: "human-aandp";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"human-body-systems.mdx": {
	id: "human-body-systems.mdx";
  slug: "human-body-systems";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"industrial-automation.mdx": {
	id: "industrial-automation.mdx";
  slug: "industrial-automation";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"innovation-product-dsgn.mdx": {
	id: "innovation-product-dsgn.mdx";
  slug: "innovation-product-dsgn";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-data-science.mdx": {
	id: "intro-data-science.mdx";
  slug: "intro-data-science";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-bio.mdx": {
	id: "intro-to-bio.mdx";
  slug: "intro-to-bio";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-chem.mdx": {
	id: "intro-to-chem.mdx";
  slug: "intro-to-chem";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-earth-science.mdx": {
	id: "intro-to-earth-science.mdx";
  slug: "intro-to-earth-science";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-game-design.mdx": {
	id: "intro-to-game-design.mdx";
  slug: "intro-to-game-design";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-iot.mdx": {
	id: "intro-to-iot.mdx";
  slug: "intro-to-iot";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"intro-to-robotics.mdx": {
	id: "intro-to-robotics.mdx";
  slug: "intro-to-robotics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"iot-in-industry.mdx": {
	id: "iot-in-industry.mdx";
  slug: "iot-in-industry";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"marketing-innovators.mdx": {
	id: "marketing-innovators.mdx";
  slug: "marketing-innovators";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"material-science.mdx": {
	id: "material-science.mdx";
  slug: "material-science";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"math-modeling.mdx": {
	id: "math-modeling.mdx";
  slug: "math-modeling";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"mechanics-motion.mdx": {
	id: "mechanics-motion.mdx";
  slug: "mechanics-motion";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"mechefundamentals.mdx": {
	id: "mechefundamentals.mdx";
  slug: "mechefundamentals";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"mixed-reality-apps.mdx": {
	id: "mixed-reality-apps.mdx";
  slug: "mixed-reality-apps";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"musculoskeletal-anatomy.mdx": {
	id: "musculoskeletal-anatomy.mdx";
  slug: "musculoskeletal-anatomy";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"neuroscience-basics.mdx": {
	id: "neuroscience-basics.mdx";
  slug: "neuroscience-basics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"ochem-basics.mdx": {
	id: "ochem-basics.mdx";
  slug: "ochem-basics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"physics-for-innovators.mdx": {
	id: "physics-for-innovators.mdx";
  slug: "physics-for-innovators";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"python-beginners.mdx": {
	id: "python-beginners.mdx";
  slug: "python-beginners";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"selfdriving-car-tech.mdx": {
	id: "selfdriving-car-tech.mdx";
  slug: "selfdriving-car-tech";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"smart-home-tech.mdx": {
	id: "smart-home-tech.mdx";
  slug: "smart-home-tech";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"space-mission.mdx": {
	id: "space-mission.mdx";
  slug: "space-mission";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"space-robotics.mdx": {
	id: "space-robotics.mdx";
  slug: "space-robotics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"startup-bootcamp.mdx": {
	id: "startup-bootcamp.mdx";
  slug: "startup-bootcamp";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"stats-data-science.mdx": {
	id: "stats-data-science.mdx";
  slug: "stats-data-science";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"steam-projects.mdx": {
	id: "steam-projects.mdx";
  slug: "steam-projects";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"vex-comp-pack.mdx": {
	id: "vex-comp-pack.mdx";
  slug: "vex-comp-pack";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"vex-learning-plan.mdx": {
	id: "vex-learning-plan.mdx";
  slug: "vex-learning-plan";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"vr-basics.mdx": {
	id: "vr-basics.mdx";
  slug: "vr-basics";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"wearable-tech-dev.mdx": {
	id: "wearable-tech-dev.mdx";
  slug: "wearable-tech-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
"web-dev.mdx": {
	id: "web-dev.mdx";
  slug: "web-dev";
  body: string;
  collection: "careers";
  data: any
} & { render(): Render[".mdx"] };
};
"contact": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "contact";
  data: any
} & { render(): Render[".md"] };
};
"features": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "features";
  data: any
} & { render(): Render[".md"] };
};
"homepage": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "homepage";
  data: any
} & { render(): Render[".md"] };
};
"integrations": {
"-index.mdx": {
	id: "-index.mdx";
  slug: "-index";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"facebook.mdx": {
	id: "facebook.mdx";
  slug: "facebook";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"google.mdx": {
	id: "google.mdx";
  slug: "google";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"pinterest.mdx": {
	id: "pinterest.mdx";
  slug: "pinterest";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"twitter.mdx": {
	id: "twitter.mdx";
  slug: "twitter";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"webflow.mdx": {
	id: "webflow.mdx";
  slug: "webflow";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
"youtube.mdx": {
	id: "youtube.mdx";
  slug: "youtube";
  body: string;
  collection: "integrations";
  data: any
} & { render(): Render[".mdx"] };
};
"pages": {
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"changelog.mdx": {
	id: "changelog.mdx";
  slug: "changelog";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] };
"elements.mdx": {
	id: "elements.mdx";
  slug: "elements";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] };
"terms-and-conditions.md": {
	id: "terms-and-conditions.md";
  slug: "terms-and-conditions";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};
"portal": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "portal";
  data: any
} & { render(): Render[".md"] };
};
"pricing": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "pricing";
  data: any
} & { render(): Render[".md"] };
};
"red-watch": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "red-watch";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
