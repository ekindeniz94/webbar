export const DEFAULT_PROJECT_ANGULAR_CONFIG: IProjectAngularConfigData = {
  commit: true,
  createApplication: true,
  dryRun: false,
  force: true,
  help: false,
  legacyBrowsers: false,
  minimal: false,
  // directory: 'AUTO_CREATED_UUID', // UUID
  prefix: 'app',
  skipGit: true,
  skipInstall: true,
  skipTests: false,
  strict: false,
  style: 'scss',
  verbose: false,
  routing: false,
  inlineStyle: false,
  inlineTemplate: false,
  packageManager: 'npm'
};

export interface IProjectAngularConfigData {
  /**
   * Initial git repository commit information.
   */
  commit: boolean;
  /**
   * Create a new initial application project in the 'src' folder of the new workspace.
   * When false, creates an empty workspace with no initial application.
   * You can then use the generate application command so that all applications are created in the projects folder.
   */
  createApplication: boolean;
  /**
   * The directory name to create the workspace in.
   */
  directory?: string | undefined;
  /**
   * Run through and reports activity without writing out results.
   */
  dryRun: boolean;
  /**
   * Force overwriting of existing files.
   */
  force: boolean;
  /**
   * Shows a help message for this command in the console.
   */
  help: true | false | { [key: string]: any };
  /**
   * Include styles inline in the component TS file.
   * By default, an external styles file is created and referenced in the component TypeScript file.
   */
  inlineStyle: boolean;
  /**
   * Include template inline in the component TS file.
   * By default, an external template file is created and referenced in the component TypeScript file.
   */
  inlineTemplate: boolean;
  /**
   * Add support for legacy browsers like Internet Explorer using differential loading.
   */
  legacyBrowsers: boolean;
  /**
   * Create a workspace without any testing frameworks. (Use for learning purposes only.)
   */
  minimal: boolean;
  /**
   * The package manager used to install dependencies.
   */
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'cnpm';
  /**
   * The prefix to apply to generated selectors for the initial project.
   */
  prefix: string;
  /**
   * Generate a routing module for the initial project.
   */
  routing: boolean;
  /**
   * Do not initialize a git repository.
   */
  skipGit: boolean;
  /**
   * Do not install dependency packages.
   */
  skipInstall: boolean;
  /**
   * Do not generate "spec.ts" test files for the new project.
   */
  skipTests: boolean;
  /**
   * Creates a workspace with stricter type checking and stricter bundle budgets settings.
   * This setting helps improve maintainability and catch bugs ahead of time.
   * For more information, see https://angular.io/strict
   */
  strict: boolean;
  /**
   * The file extension or preprocessor to use for style files.
   */
  style: 'css' | 'scss' | 'sass' | 'less' | 'styl';
  /**
   * Add more details to output logging.
   */
  verbose: boolean;

  /**
   * TODO
   * A collection of schematics to use in generating the initial application.
   */
  // collection?: string;

  /**
   * TODO
   * Disable interactive input prompts for options with a default.
   */
  // defaults?: boolean;

  /**
   * TODO
   * Enable interactive input prompts.
   */
  // interactive?: boolean;

  /**
   * TODO
   * The path where new projects will be created, relative to the new workspace root.
   */
  // newProjectRoot: string;

  /**
   * TODO
   * The view encapsulation strategy to use in the initial project.
   */
  // viewEncapsulation?: 'Emulated' | 'Native' | 'None' | 'ShadowDom';
}
