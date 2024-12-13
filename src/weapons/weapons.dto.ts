import { OmitType } from "@nestjs/mapped-types";

export enum WeaponEnumTypes {
  AutoRifle = 6,
  Shotgun = 7,
  Machinegun = 8,
  HandCannon = 9,
  RocketLauncher = 10,
  FusionRifle = 11,
  SniperRifle = 12,
  PulseRifle = 13,
  ScoutRifle = 14,
  Crm = 16,
  Sidearm = 17,
  Sword = 18,
  Mask = 19,
  Shader = 20,
  Ornament = 21,
  FusionRifleLine = 22,
  GrenadeLauncher = 23,
  SubmachineGun = 24,
  TraceRifle = 25,
  HelmetArmor = 26,
  GauntletsArmor = 27,
  ChestArmor = 28,
  LegArmor = 29,
  ClassArmor = 30,
  Bow = 31,
  DummyRepeatableBounty = 32,
  Glaive = 33,
}


export class BaseWeaponDto {
  id: string;
  name: string;
  icon: string;
  watermark: string;
}

/**
 * DTO for most types weapons stats.
 * Types:
 * - AutoRifle: 6
 * - Shotgun: 7
 * - Machinegun: 8
 * - HandCannon: 9
 * - SniperRifle: 12
 * - PulseRifle: 13
 * - ScoutRifle: 14
 * - Sidearm: 17 // Primary
 * - SubmachineGun: 24
 * - TraceRifle: 25
 */
export class WeaponMostDto extends BaseWeaponDto {
  /** Impact of the weapon */
  Impact: number;

  /** Range of the weapon */
  Range: number;

  /** Stability of the weapon */
  Stability: number;

  /** Handling speed of the weapon */
  Handling: number;

  /** Reload speed of the weapon */
  "Reload speed": number;

  /** Aim assistance of the weapon */
  "Aim assistance": number;

  /** Zoom level of the weapon */
  Zoom: number;

  /** Airborne accuracy of the weapon */
  "Airborne accuracy": number;

  /** Rate of Fire (Rounds Per Minute) */
  RPM: number;

  /** Magazine size of the weapon */
  Magazine: number;

  /** Recoil direction of the weapon */
  "Recoil direction": number;

  /** Range when firing from the hip */
  "Range hip-fire": number;

  /** Range when aiming down sights (ADS) */
  "Range ADS": number;

  /** Damage dealt to the body */
  "Damage body": number;

  /** Damage dealt to the critical hit areas */
  "Damage crit": number;

}

/**
 * DTO for fuse weapons stats.
 * Types:
 * - FusionRifle: 11
 * - FusionRifleLine: 22
 */
export class WeaponFuseDto extends WeaponMostDto {
  /** Charge time of the weapon */
  "Charge time": number;
}

/**
 * DTO for grenade and rocket weapons stats.
 * Types:
 * - GrenadeLauncher: 23
 * - RocketLauncher: 10
 */
export class WeaponGrenadeDto extends OmitType(WeaponMostDto, ['Range']) {
  "Blast radius": number;
  Velocity: number;
}

/**
 * DTO for bow weapons stats.
 * Types:
 * - Bow: 31
 */
export class WeaponBowDto extends WeaponMostDto {
  "Draw time": number;
}