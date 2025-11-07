export const manifest = {
    "amazing-arthropods": {
        displayName: "Amazing Arthropods",
        level: "Elementary",
        groups: {
            "classes": {
                displayName: "Arthropod Classes",
                sets: {
                    "arachnida": {
                        displayName: "Arachnida",
                        load: () => import("./amazing-arthropods/classes/arachnida"),
                    },
                    "branchiopoda": {
                        displayName: "Branchiopoda",
                        load: () => import("./amazing-arthropods/classes/branchiopoda"),
                    },
                    "chilopoda": {
                        displayName: "Chilopoda",
                        load: () => import("./amazing-arthropods/classes/chilopoda"),
                    },
                    "diplopoda": {
                        displayName: "Diplopoda",
                        load: () => import("./amazing-arthropods/classes/diplopoda"),
                    },
                    "insecta": {
                        displayName: "Insecta",
                        load: () => import("./amazing-arthropods/classes/insecta"),
                    },
                    "malacostraca": {
                        displayName: "Malacostracta",
                        load: () => import("./amazing-arthropods/classes/malacostraca"),
                    },
                }
            },
            "orders": {
                displayName: "Insect Orders",
                sets: {
                    "blattodea": {
                        displayName: "Blattodea",
                        load: () => import("./amazing-arthropods/orders/blattodea"),
                    },
                    "coleoptera": {
                        displayName: "Coleoptera",
                        load: () => import("./amazing-arthropods/orders/coleoptera"),
                    },
                    "diptera": {
                        displayName: "Diptera",
                        load: () => import("./amazing-arthropods/orders/diptera"),
                    },
                    "ephemeroptera": {
                        displayName: "Ephemeroptera",
                        load: () => import("./amazing-arthropods/orders/ephemeroptera"),
                    },
                    "hemiptera": {
                        displayName: "Hemiptera",
                        load: () => import("./amazing-arthropods/orders/hemiptera"),
                    },
                    "hymenoptera": {
                        displayName: "Hymenoptera",
                        load: () => import("./amazing-arthropods/orders/hymenoptera"),
                    },
                    "lepidoptera": {
                        displayName: "Lepidoptera",
                        load: () => import("./amazing-arthropods/orders/lepidoptera"),
                    },
                    "mantodea": {
                        displayName: "Mantodea",
                        load: () => import("./amazing-arthropods/orders/mantodea"),
                    },
                    "megaloptera": {
                        displayName: "Megaloptera",
                        load: () => import("./amazing-arthropods/orders/megaloptera"),
                    },
                    "neuroptera": {
                        displayName: "Neuroptera",
                        load: () => import("./amazing-arthropods/orders/neuroptera"),
                    },
                    "odonata": {
                        displayName: "Odonata",
                        load: () => import("./amazing-arthropods/orders/odonata"),
                    },
                    "orthoptera": {
                        displayName: "Orthoptera",
                        load: () => import("./amazing-arthropods/orders/orthoptera"),
                    },
                    "trichoptera": {
                        displayName: "Trichoptera",
                        load: () => import("./amazing-arthropods/orders/trichoptera"),
                    },
                }
            },
            "general": {
                displayName: "General",
                sets: {
                    "defense-mechanisms": {
                        displayName: "Defense Mechanisms",
                        load: () => import("./amazing-arthropods/general/defense-mechanisms"),
                    },
                    "metamorphosis": {
                        displayName: "Metamorphosis",
                        load: () => import("./amazing-arthropods/general/metamorphosis"),
                    },
                }
            },
            "2025-species": {
                displayName: "2025 Species",
                sets: {
                    "general-questions": {
                        displayName: "General Questions",
                        load: () => import("./amazing-arthropods/2025-species/general-questions"),
                    },
                    "identification": {
                        displayName: "Identification",
                        load: () => import("./amazing-arthropods/2025-species/identification"),
                    }
                },
            },
        }
    },
    "entomology": {
        displayName: "Entomology B",
        level: "Middle",
        groups: {
            "anatomy": {
                displayName: "Anatomy",
                sets: {
                    "leg-types": {
                        displayName: "Leg Types",
                        load: () => import("./entomology/anatomy/leg-types"),
                    },
                    "wing-types": {
                        displayName: "Wing Types",
                        load: () => import("./entomology/anatomy/wing-types"),
                    },
                }
            },
        },
    },
    "potions-poisons": {
        displayName: "Potions and Poisons B",
        level: "Middle",
        groups: {
        },
    },
};

export function buildSetIndex(manifest) {
  const index = {};

  for (const [eventId, event] of Object.entries(manifest)) {
    for (const group of Object.values(event.groups)) {
      for (const [setId, setDef] of Object.entries(group.sets)) {
        index[setId] = { ...setDef, eventId };
      }
    }
  }

  return index;
}

export const setIndex = buildSetIndex(manifest);