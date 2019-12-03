import { Injectable } from '@angular/core';

export class ConfigNames {
  constructor(
    public buttonBack?: string,
    public buttonNext?: string,
    public buttonFinish?: string,
  ) {}
}

@Injectable()
export class AppStepConfig {
  // justify: 'start' | 'center' | 'end' | 'fill' | 'justified';
  // orientation: 'horizontal' | 'vertical';
  // type: 'tabss' | 'pills';
  justify: 'start' | 'center' | 'end' | 'fill' | 'justified' = 'center';
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  // type: 'tabss' | 'pills' = 'tabss';
  type: 'stepss' | 'pills' = 'stepss';
  configNames: ConfigNames = new ConfigNames('Anterior', 'Siguiente', 'Finalizar');
}
