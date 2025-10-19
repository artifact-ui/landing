import { Heading, Text, Grid, Stack } from '@artifact-ui/core';
import { Palette, Accessibility, Package, Target, Puzzle, Layers } from 'lucide-react';
import styles from './feature-grid.module.css';

const features = [
	{
		icon: Palette,
		title: 'Themeable',
		description: 'Customizable themes and accents',
	},
	{
		icon: Accessibility,
		title: 'Accessible',
		description: 'Built on Radix UI primitives with ARIA support',
	},
	{
		icon: Package,
		title: 'Tree-shakeable',
		description: 'Import only what you need',
	},
	{
		icon: Target,
		title: 'TypeScript',
		description: 'Full type definitions included',
	},
	{
		icon: Puzzle,
		title: 'Composable',
		description: 'Flexible component APIs with compound patterns',
	},
	{
		icon: Layers,
		title: 'CSS Layers',
		description: 'Optional cascade layer support',
	},
];

export function FeatureGrid() {
	return (
		<Stack gap="8" className={styles.features}>
			<Heading size="7" className={styles.featuresTitle}>
				Features
			</Heading>
			<Grid gap="8" className={styles.featuresGrid}>
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<Stack key={feature.title} gap="3" align="center" className={styles.feature}>
							<Icon className={styles.featureIcon} />
							<Heading size="4" className={styles.featureTitle}>
								{feature.title}
							</Heading>
							<Text color="secondary" size="3">
								{feature.description}
							</Text>
						</Stack>
					);
				})}
			</Grid>
		</Stack>
	);
}
