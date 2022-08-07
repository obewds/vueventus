import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { TransitionsClasses } from './TransitionsClasses';
import type { TransitionsCustom } from './TransitionsCustom';
import type { TransitionsDurations } from './TransitionsDurations';
import type { TransitionsEasings } from './TransitionsEasings';
import type { TransitionsTransitions } from './TransitionsTransitions';
export interface ConfigTransitions {
    durations: TransitionsDurations;
    easings: TransitionsEasings;
    transitions: TransitionsTransitions;
    classes: TransitionsClasses;
    custom: TransitionsCustom;
    getDurationClasses: ReturnsClassesFunction;
    getEasingClasses: ReturnsClassesFunction;
    getTransitionClasses: ReturnsClassesFunction;
    [key: string]: any;
}
