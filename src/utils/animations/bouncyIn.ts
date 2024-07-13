export const bouncyIn = {
  visible: (custom: any) => ({
    scale: [0, 1],
    transition: { delay: 0.4, type: 'spring' },
  }),
  outOfView: (custom: any) => ({
    scale: 0,
  }),
};

export enum BouncyInState {
  VISIBLE = 'visible',
  OUTOFVIEW = 'outOfView'
}