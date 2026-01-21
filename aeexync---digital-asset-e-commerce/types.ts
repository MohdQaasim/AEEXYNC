
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'CC' | 'Effects' | 'Preset' | 'Project' | 'Free';
  description: string;
  tags: string[];
  thumbnail: string;
  previews: string[];
  fileSize: string;
  license: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProjectSection {
  title: string;
  previewUrl: string;
  products: Product[];
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}
