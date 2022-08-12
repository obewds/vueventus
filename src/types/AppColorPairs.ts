// ./src/types/AppColorPairs.ts

import type { AppTintShadePairs } from './AppTintShadePairs'
import type { GroundTextColors } from './GroundTextColors'

export interface AppColorPairs {
    white?: GroundTextColors
    black?: GroundTextColors
    gray?: AppTintShadePairs
    trueGray?: AppTintShadePairs
    warmGray?: AppTintShadePairs
    coolGray?: AppTintShadePairs
    red?: AppTintShadePairs
    rose?: AppTintShadePairs
    pink?: AppTintShadePairs
    fuchsia?: AppTintShadePairs
    purple?: AppTintShadePairs
    violet?: AppTintShadePairs
    indigo?: AppTintShadePairs
    blue?: AppTintShadePairs
    lightBlue?: AppTintShadePairs
    cyan?: AppTintShadePairs
    teal?: AppTintShadePairs
    emerald?: AppTintShadePairs
    green?: AppTintShadePairs
    lime?: AppTintShadePairs
    yellow?: AppTintShadePairs
    amber?: AppTintShadePairs
    orange?: AppTintShadePairs
    redGray?: AppTintShadePairs
    roseGray?: AppTintShadePairs
    pinkGray?: AppTintShadePairs
    fuchsiaGray?: AppTintShadePairs
    purpleGray?: AppTintShadePairs
    violetGray?: AppTintShadePairs
    indigoGray?: AppTintShadePairs
    blueGray?: AppTintShadePairs
    lightBlueGray?: AppTintShadePairs
    cyanGray?: AppTintShadePairs
    tealGray?: AppTintShadePairs
    emeraldGray?: AppTintShadePairs
    greenGray?: AppTintShadePairs
    limeGray?: AppTintShadePairs
    yellowGray?: AppTintShadePairs
    amberGray?: AppTintShadePairs
    orangeGray?: AppTintShadePairs
    [key: string]: GroundTextColors | AppTintShadePairs | undefined
}
