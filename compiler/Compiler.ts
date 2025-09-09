import webpack from 'webpack'
import { WebpackConfigBuilder } from './WebpackConfigBuilder'

export class Compiler {
	private readonly adminBuilderWebpackConfig = new WebpackConfigBuilder()
	
	public async run(): Promise<void> {
		const config = await this.adminBuilderWebpackConfig.getBuildConfig()
		
		webpack(config, (error, stats) => {
			if (error) {
				console.error('❌ Webpack fatal error:')
				this.printError(error)
				return
			}
			
			if (!stats) {
				console.error('❌ Webpack returned no stats')
				return
			}
			
			const info = stats.toJson({ all: false, errors: true, warnings: true })
			
			if (stats.hasErrors()) {
				console.error('❌ Webpack compilation errors:')
				info.errors?.forEach(this.printError)
			}
			
			if (stats.hasWarnings()) {
				console.warn('⚠️ Webpack compilation warnings:')
				info.warnings?.forEach(this.printError)
			}
			
			if (!stats.hasErrors()) {
				console.log('✅ Build completed successfully')
			}
		})
	}
	
	private printError = (err: any) => {
		if (typeof err === 'string') {
			console.error(err)
			return
		}
		
		const { message, stack, moduleName, loc, details } = err
		
		console.error(`📦 ${moduleName || ''}${loc ? ` @ ${loc}` : ''}`)
		console.error(`🧨 Message: ${message}`)
		
		if (details) {
			console.error(`📄 Details: ${details}`)
		}
		
		if (stack) {
			console.error(`🧵 Stack:\n${stack}`)
		}
		
		console.error('─'.repeat(80))
	}
}
