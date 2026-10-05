/* Public content only. Keep unreleased project drafts OUTSIDE this directory.
   Add a released project by copying the documented object shape in docs/CONTENT.md. */
window.HIJINKS = {
  brand: 'Hijinks',
  github: 'https://github.com/Hijinkssss',
  nexus: 'https://www.nexusmods.com/profile/Hijinksss',
  checkedOn: '2026-10-05',
  projects: [
    {
      id: 'faa', code: 'FAA', name: 'Full Auto Assist', category: 'Accessibility',
      version: '1.1.0', date: '2026-10-01', status: 'Released',
      tagline: 'Less clicking. More diving.',
      description: 'Hold Fire to repeat normal Fire input on explicitly supported weapons. A little less strain for the long fight.',
      image: 'assets/images/faa-thumbnail.png', imageAlt: 'Full Auto Assist artwork by Hijinks, featuring a fire-mode selector',
      repo: 'https://github.com/Hijinkssss/helldivers2-modding/tree/main/HD2FullAutoAssist',
      release: 'https://github.com/Hijinkssss/helldivers2-modding/releases/tag/v1.1.0',
      download: 'https://github.com/Hijinkssss/helldivers2-modding/releases/download/v1.1.0/Full-Auto-Assist-1.1.0-Arsenal.zip',
      filename: 'Full-Auto-Assist-1.1.0-Arsenal.zip',
      nexus: 'https://www.nexusmods.com/helldivers2/mods/16720',
      upstreamDocs: 'https://github.com/Hijinkssss/helldivers2-modding/blob/main/HD2FullAutoAssist/README.md',
      features: ['31 explicitly supported weapons', 'Configurable Arsenal profiles', 'White / yellow ON-OFF HUD indicator'],
      requirements: 'HD2 Arsenal and Bingus Shared Loader v18 / API 1.',
      compatibility: 'Exact-build gated for Steam build 25480438. Check the release notes after a game update.',
      install: ['Install HD2 Arsenal and Bingus Shared Loader v18 / API 1.', 'Download the release ZIP below. Disable the previous FAA package when replacing it.', 'Import the ZIP into Arsenal, enable Full Auto Assist, choose your profiles, and deploy.'],
      usage: 'FAA starts ON by default. Press = (or + on some keyboard layouts) to toggle it. Optional Mod Bindings Menu support provides a rebindable toggle. Your preference persists between missions during the session.',
      limitations: ['The game controls whether each input becomes a shot; weapon statistics stay unchanged.', 'Unknown weapons, native full-auto weapons, and unsupported charge weapons retain their usual behavior.', 'A complete game restart resets the toggle to your INI setting or the default ON.'],
      faq: [{ question: 'Do I need HD2Runtime or HD2ModCore?', answer: 'No. The required runtime dependency is Bingus Shared Loader v18 / API 1.' }, { question: 'Why did assistance stop after an update?', answer: 'The mod checks the supported game build. Check for a compatible release instead of bypassing that check.' }],
      media: [{ src: 'assets/images/faa-thumbnail.png', alt: 'Official Full Auto Assist project artwork', caption: 'Project artwork · Full Auto Assist', type: 'Artwork' }]
    },
    {
      id: 'expanded-tips', code: 'TIPS', name: 'HD2 Expanded Tips', category: 'Quality of life',
      version: '1.0.0', date: '2026-10-04', status: 'Released',
      tagline: 'Make the loading screen count.',
      description: '82 practical US English loading tips covering combat, objectives, enemies, supplies, and teamwork. Familiar screen. Better intel.',
      image: 'assets/images/expanded-tips.png', imageAlt: 'HD2 Expanded Tips artwork by Hijinks',
      repo: 'https://github.com/Hijinkssss/hd2-expanded-tips',
      release: 'https://github.com/Hijinkssss/hd2-expanded-tips/releases/tag/v1.0.0',
      download: 'https://github.com/Hijinkssss/hd2-expanded-tips/releases/download/v1.0.0/HD2-Expanded-Tips-v1.0.0.zip',
      filename: 'HD2-Expanded-Tips-v1.0.0.zip',
      nexus: 'https://www.nexusmods.com/helldivers2/mods/16970',
      upstreamDocs: 'https://github.com/Hijinkssss/hd2-expanded-tips#readme',
      features: ['82 rewritten loading-screen tips', 'Vanilla display and tip selection', 'No runtime loader required'],
      requirements: 'HD2 Arsenal. No Shared Loader or other runtime loader is needed.',
      compatibility: 'US English only, built against Steam build 25480438. Other mods replacing the same US English localization resource can conflict.',
      install: ['Download the release ZIP below.', 'Import the ZIP into HD2 Arsenal.', 'Enable HD2 Expanded Tips and deploy your configuration.'],
      usage: 'Tips appear through the normal loading-screen system. There is nothing to toggle or configure in-game.',
      limitations: ['The mod replaces the existing fixed pool; it does not increase the number of tips.', 'UK English and other languages are untouched.', 'Balance updates may require changes to the advice or localization resource.'],
      faq: [{ question: 'Does this require Shared Loader?', answer: 'No. Expanded Tips replaces localization data and has no runtime loader dependency.' }, { question: 'How do I restore the original tips?', answer: 'Disable or remove Expanded Tips in Arsenal, then redeploy. Another localization replacement may still change the original tips.' }],
      media: [{ src: 'assets/images/expanded-tips.png', alt: 'Official HD2 Expanded Tips project artwork', caption: 'Project artwork · HD2 Expanded Tips', type: 'Artwork' }]
    }
  ],
  guides: [
    { title: "Helldiver's Bestiary", subtitle: 'Deliver Democracy Effectively', label: 'Enemy intelligence', icon: 'target', description: 'Know what you are fighting. Browse enemy behavior and practical ways to deal with threats across the three factions.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3159493752' },
    { title: 'Boosters and You', subtitle: 'Guide to the Best Boosters', label: 'Squad loadouts', icon: 'bolt', description: 'Understand what each booster brings to the squad and make a more informed choice before the drop.', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3166911968' }
  ],
  updates: [
    { project: 'expanded-tips', version: '1.0.0', date: '2026-10-04', title: 'Better intel between drops.', notes: ['Initial release with 82 rewritten US English loading tips.', 'Keeps the familiar loading-screen UI and original tip-selection behavior.', 'Install through Arsenal; no additional runtime loader.'], url: 'https://github.com/Hijinkssss/hd2-expanded-tips/releases/tag/v1.0.0' },
    { project: 'faa', version: '1.1.0', date: '2026-10-01', title: 'More control. Less overhead.', notes: ['31 supported weapons, including Commando and AMR SPECIAL.', 'Eruptor cadence choices: 27, 28 (default), or 32 RPM.', 'Three-cartridge status indicator and reduced HUD/runtime overhead.'], url: 'https://github.com/Hijinkssss/helldivers2-modding/releases/tag/v1.1.0' },
    { project: 'faa', version: '1.0.1', date: '2026-09-29', title: 'Performance and reliability.', notes: ['Reduced repeated discovery work through validated caches.', 'Improved handling of slow weapons and weapon transitions.', 'Improved restoration and recovery after transient failures.'], url: 'https://github.com/Hijinkssss/helldivers2-modding/releases/tag/v1.0.1' },
    { project: 'faa', version: '1.0.0', date: '2026-09-29', title: 'The first drop.', notes: ['Initial public release with held-Fire assistance for 29 supported weapons.', 'Seven configurable Arsenal weapon profile groups.', 'Default ON, optional Mod Bindings Menu support, and exact-build gating.'], url: 'https://github.com/Hijinkssss/helldivers2-modding/releases/tag/v1.0.0' }
  ]
};
