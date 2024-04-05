/**
 * Values are converted to strings when emitted which is
 * why we do not have a `number` type here even though the
 * `value` prop accepts a `number` type.
 */
export interface InputChangeEventDetail {
  value?: string | null;
  event?: Event;
}

// We recognize that InputInput is not an ideal naming pattern for this type.
export interface InputInputEventDetail {
  value?: string | null;
  event?: Event;
}

