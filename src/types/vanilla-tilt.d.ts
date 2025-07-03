// vanilla-tilt.d.ts
declare module 'vanilla-tilt' {
    export interface TiltOptions {
      reverse?: boolean;
      max?: number;
      perspective?: number;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: 'x' | 'y' | null;
      reset?: boolean;
      easing?: string;
      glare?: boolean;
      'max-glare'?: number;
      'glare-prerender'?: boolean;
      'full-page-listening'?: boolean;
      'mouse-event-trans-from'?: string | null;
    }
  
    export default class VanillaTilt {
      static init(elements: HTMLElement | HTMLElement[], options?: TiltOptions): void;
      destroy(): void;
      getValues(): {
        tiltX: number;
        tiltY: number;
        percentageX: number;
        percentageY: number;
        angle: number;
      };
      reset(): void;
    }
  }
  