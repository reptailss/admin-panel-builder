import {Configuration} from 'webpack';
import {BuildOptions} from './types/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@app': `${options.paths.src}/app`,
			'@auth': `${options.paths.src}/auth`,
			'@authProvider': `${options.paths.src}/authProvider`,
			'@fields': `${options.paths.src}/fields`,
			'@contentManager': `${options.paths.src}/contentManager`,
			'@postManager': `${options.paths.src}/postManager`,
			'@access': `${options.paths.src}/access`,
			'@accessManager': `${options.paths.src}/accessManager`,
			'@client': `${options.paths.src}/client`,
			'@requests': `${options.paths.src}/requests`,
			'@sx': `${options.paths.src}/client/system/sx/index.ts`,
			
			//dev
			'admin-panel-builder': `${options.paths.src}/index.ts`,
			'@common': `${options.paths.src}/dev/common`,
			'@admin-fields': `${options.paths.src}/dev/admin/fields`,
			'@admin-content': `${options.paths.src}/dev/admin/content`,
			'@admin-managers': `${options.paths.src}/dev/admin/managers`,
			'@admin-providers': `${options.paths.src}/dev/admin/providers`,
			'@admin-helpers': `${options.paths.src}/dev/admin/helpers`,
		},
		fallback: {'fs': false, 'crypto': false},
	};
}
