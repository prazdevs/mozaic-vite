const modifierList = (modifiers: string) => modifiers.replace(' ', '').split(',');

export const responsiveModifierValidators = (
  modifiers: string,
  authorizedModifiers: string
) => {
  return modifierList(modifiers).every((modifier) =>
    authorizedModifiers.includes(modifier)
  );
};

export const responsiveModifiers = (baseClass: string, modifiers: string) => {
  return modifierList(modifiers).map(suffix => `${baseClass}--${suffix}`)
}