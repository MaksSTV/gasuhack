import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './src/app/build-config/buildWebpack'
import { BuildMode, BuildPaths } from './src/app/build-config/types/types'

interface EnvVariables {
	mode: BuildMode,
	port: number,
}

export default (env: EnvVariables) => {

	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src/app/', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths
	})
	return config
}