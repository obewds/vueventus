import { ReturnsClassesFunction } from './ReturnsClassesFunction';
import { TransitionsClasses } from './TransitionsClasses';
import { TransitionsCustom } from './TransitionsCustom';
import { TransitionsDurations } from './TransitionsDurations';
import { TransitionsEasings } from './TransitionsEasings';
import { TransitionsTransitions } from './TransitionsTransitions';
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
