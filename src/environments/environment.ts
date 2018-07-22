// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { isDevMode } from '@angular/core';

export const environment = {
  production: false,
  app_url: isDevMode()? 'http://localhost:8080' : 'https://beatcloud.herokuapp.com'
};
