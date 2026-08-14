/**
 * Media helpers.
 *
 * All photography is placeholder (Pexels CDN) until real clinic photography
 * is supplied. Swap each `media.*` field for a self-hosted path in
 * `public/images/` and the site updates everywhere it's referenced.
 */

const pexels = (id: number, w = 1600, h?: number) => {
  const crop = h ? `&h=${h}&fit=crop` : "";
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${crop}`;
};

export const media = {
  hero: pexels(30518441, 2400, 1400),
  clinicInterior: [
    pexels(6627353),
    pexels(7800666),
    pexels(6812560),
    pexels(6812569),
  ],
  philosophy: pexels(3845981, 1800, 1200),
  philosophySecondary: pexels(3952008, 1200, 1500),
  jaipur: {
    clinic: pexels(6627838, 2000, 1300),
    // PLACEHOLDER — replace with a Jaipur landmark or real clinic exterior.
    landmark: pexels(17911339, 1200, 1500),
  },
  doctors: [
    pexels(14624608, 900, 1100),
    pexels(31071253, 900, 1100),
    pexels(8327633, 900, 1100),
    pexels(8413334, 900, 1100),
  ],
  journey: [
    pexels(3952124, 1600, 1200),
    pexels(3845954, 1600, 1200),
    pexels(8260620, 1600, 1200),
    pexels(7800666, 1600, 1200),
  ],
};

export function img(id: number, w = 1600, h?: number) {
  return pexels(id, w, h);
}
