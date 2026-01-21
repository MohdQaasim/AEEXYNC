
import { Product, ProjectSection } from '../types';

export const PAID_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Glow Quality CC',
    price: 2,
    category: 'CC',
    description: 'Ultra-clean glow configuration for high-end edits. Optimized for AE CC 2020+.',
    tags: ['CC', 'Glow'],
    thumbnail: 'https://different-emerald-5useqhd85e.edgeone.app/glow%20cc_00000.jpg',
    previews: ['https://different-emerald-5useqhd85e.edgeone.app/glow%20cc_00000.jpg'],
    fileSize: '450 KB',
    license: 'Personal & Commercial Use',
    slug: 'glow-quality-cc'
  },
  {
    id: '2',
    name: 'Dark Quality CC',
    price: 2,
    category: 'CC',
    description: 'Moody, high-contrast dark color correction. Perfect for cinematic football edits.',
    tags: ['CC', 'Dark'],
    thumbnail: 'https://gorgeous-yellow-fslvkagllq.edgeone.app/Comp%201_00000.jpg',
    previews: ['https://gorgeous-yellow-fslvkagllq.edgeone.app/Comp%201_00000.jpg'],
    fileSize: '380 KB',
    license: 'Personal & Commercial Use',
    slug: 'dark-quality-cc'
  },
  {
    id: '3',
    name: 'Topaz Settings',
    price: 7,
    category: 'Preset',
    description: 'Professional Topaz Video AI export settings for 4K-like quality from 1080p footage.',
    tags: ['Preset', 'Topaz'],
    thumbnail: 'https://yeasty-emerald-lby3svpery.edgeone.app/topaz%20setting_00000.jpg',
    previews: ['https://yeasty-emerald-lby3svpery.edgeone.app/topaz%20setting_00000.jpg'],
    fileSize: '1.2 MB',
    license: 'Personal & Commercial Use',
    slug: 'topaz-settings'
  },
  {
    id: '4',
    name: 'Hard-Shakes',
    price: 7,
    category: 'Preset',
    description: 'Aggressive impact shakes for sync-heavy montages. Includes 5 variants.',
    tags: ['Preset', 'Shake'],
    thumbnail: 'https://statistical-crimson-9dxct0k3ov.edgeone.app/shake_00000.jpg',
    previews: ['https://statistical-crimson-9dxct0k3ov.edgeone.app/shake_00000.jpg'],
    fileSize: '8.4 MB',
    license: 'Personal & Commercial Use',
    slug: 'hard-shakes'
  },
  {
    id: '5',
    name: 'All CCs + Topaz Settings',
    price: 10,
    category: 'CC',
    description: 'The ultimate bundle including every color correction and Topaz preset we offer.',
    tags: ['Bundle', 'CC'],
    thumbnail: 'https://sole-apricot-pyydutazlv.edgeone.app/asdaposdjpa_00000.jpg',
    previews: ['https://sole-apricot-pyydutazlv.edgeone.app/asdaposdjpa_00000.jpg'],
    fileSize: '24.5 MB',
    license: 'Personal & Commercial Use',
    slug: 'all-ccs-bundle'
  },
  {
    id: '6',
    name: 'Effects Pack',
    price: 5,
    category: 'Effects',
    description: 'Custom Sapphire & BCC overlay effects for seamless transitions.',
    tags: ['Effects', 'Overlay'],
    thumbnail: 'https://conscious-sapphire-zyrro6vi2t.edgeone.app/eeff_00000.jpg',
    previews: ['https://conscious-sapphire-zyrro6vi2t.edgeone.app/eeff_00000.jpg'],
    fileSize: '15.2 MB',
    license: 'Personal & Commercial Use',
    slug: 'effects-pack'
  }
];

export const PROJECT_SECTIONS: ProjectSection[] = [
  {
    title: 'Football Edits',
    previewUrl: 'https://youtu.be/8mwmGL7EGgc',
    products: [
      {
        id: 'p1',
        name: 'Football Editis',
        price: 5,
        category: 'Project',
        description: 'Premium football project file with high-energy sync and custom shakes.',
        tags: ['Project', 'Football'],
        thumbnail: 'https://picsum.photos/seed/ae7/400/225',
        previews: [],
        fileSize: '120 MB',
        license: 'Personal & Commercial Use',
        slug: 'football-editis'
      }
    ]
  },
  {
    title: 'Ronaldo All Edits',
    previewUrl: 'edit Ronaldo Preview.mp4',
    products: [
      {
        id: 'p2-new',
        name: 'Ronaldo All Edits',
        price: 3,
        category: 'Project',
        description: 'Complete collection of CR7 project files including hard-sync and cinematic transitions.',
        tags: ['Project', 'CR7'],
        thumbnail: 'https://picsum.photos/seed/ae8/400/225',
        previews: [],
        fileSize: '250 MB',
        license: 'Personal & Commercial Use',
        slug: 'ronaldo-all-edits'
      }
    ]
  },
  {
    title: 'Movie Edits',
    previewUrl: 'https://picsum.photos/seed/movies-all/1200/400',
    products: [
      {
        id: 'p3-new',
        name: 'Movie Edits',
        price: 3,
        category: 'Project',
        description: 'The ultimate movie edit project pack. Features advanced grading and storytelling flow.',
        tags: ['Project', 'Cinema'],
        thumbnail: 'https://picsum.photos/seed/ae9/400/225',
        previews: [],
        fileSize: '310 MB',
        license: 'Personal & Commercial Use',
        slug: 'movie-edits'
      }
    ]
  },
  {
    title: 'Text and Watermark',
    previewUrl: 'https://picsum.photos/seed/watermark-new/1200/400',
    products: [
      {
        id: 'p4-new',
        name: 'Text and Watermark',
        price: 2,
        category: 'Project',
        description: 'Professional typography and watermark animation project files.',
        tags: ['Project', 'Typography'],
        thumbnail: 'https://picsum.photos/seed/ae10/400/225',
        previews: [],
        fileSize: '45 MB',
        license: 'Personal & Commercial Use',
        slug: 'text-and-watermark'
      }
    ]
  }
];

export const FREE_PRESETS: Product[] = [
  {
    id: 'f-cc-i-use',
    name: 'Basic CC (I USE)',
    price: 0,
    category: 'Free',
    description: 'My daily driver color correction for that signature clean look.',
    tags: ['Free', 'CC'],
    thumbnail: 'https://shallow-green-pidcqtfck9.edgeone.app/free%20cc%27s_00000.jpg',
    previews: [],
    fileSize: '250 KB',
    license: 'Free to use',
    slug: 'basic-cc-i-use'
  },
  {
    id: 'f-shakes',
    name: 'Shakes',
    price: 0,
    category: 'Free',
    description: 'High-impact essential shakes for dynamic video transitions.',
    tags: ['Free', 'Shake'],
    thumbnail: 'https://sweet-tomato-sf24gixqr7.edgeone.app/free%20shaeks_00000.jpg',
    previews: [],
    fileSize: '1.2 MB',
    license: 'Free to use',
    slug: 'free-shakes'
  },
  {
    id: 'f-material',
    name: 'Materials',
    price: 0,
    category: 'Free',
    description: 'Essential textures and production material for your timeline.',
    tags: ['Free', 'Material'],
    thumbnail: 'https://ultimate-silver-emcm391ur1.edgeone.app/material_00000.jpg',
    previews: [],
    fileSize: '85 MB',
    license: 'Free to use',
    slug: 'free-materials'
  }
];
