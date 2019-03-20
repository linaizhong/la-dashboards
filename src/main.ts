import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { RuntimeConfig } from './app/config/runtime.config';
import { environment } from './environments/environment';

const configUrl = './app/config/config.json';

fetch(configUrl, { method: 'get' }).then(response => {
  response.json().then((data: any) => {
    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic([{ provide: RuntimeConfig, useValue: new RuntimeConfig(data.config) }])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
});
