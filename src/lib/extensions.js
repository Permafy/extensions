/*
    note to contributors & developers that can read JSON:
        the extra commas are added at the end of each thing
        to help copy & pasting work better
        pleas dont remove them :)
*/

import temporaryExtensions from "./temporary-extensions-data.js";

const localExtensions = [
    {
        name: "Gaia Utilities",
        description: "Wonderful utility blocks!",
        code: "GaiaWindWave90/GaiaBlocks.js",
        banner: "GaiaWindWave90/GaiaUtilities.png",
        creator: "GaiaWindWave90 and other users",
        isGitHub: true,
    },
    {
        name: 'GaiaGPT',
        description: 'A GaiaMod modification of Pang AI with more prompts.',
        code: "GaiaWindWave90/GaiaGPT.js",
        banner: "GaiaWindWave90/GaiaGPT.png",
        creator: "logise1123",
        isGitHub: true,
    },
    {
        name: 'Prompts',
        description: 'Prompts made for Gaia AI. Inspired by the prompts extension found in Snail-IDE.',
        code: "GaiaWindWave90/GTPPrompts.js",
        banner: "GaiaWindWave90/prompts.png",
        creator: "GaiaWindWave90",
        isGitHub: true,
    },
    {
        name: 'Spinach Facts',
        description: 'An extension about spinach! Based on Gen1x\'s CATS, MrIncredibleMaker\'s DOGS and pooiod7\'s Raccoon Facts extensions.',
        code: "GaiaWindWave90/SpinachFacts.js",
        banner: "GaiaWindWave90/spinach.png",
        creator: "GaiaWindWave90",
        isGitHub: true,
    },
    {
        name: "Penguin Attack!",
        description: "Edited version of the Fire in the Hole extension.",
        code: "GaiaWindWave90/PenguinAttack.js",
        banner: "GaiaWindWave90/PenguinAttack.png",
        creator: "GaiaWindWave90",
        isGitHub: true,
    },
    {
        name: "Cocrea Fetch",
        description: "Fetches API from Cocrea or Gandi IDE.",
        code: "GaiaWindWave90/cocreaFetch.js",
        banner: "GaiaWindWave90/cocreaFetch.png",
        creator: "fath11",
        isGitHub: true,
    },
    {
        name: "Webcam Recorder",
        description: "Records videos straight out of webcam.",
        code: "GaiaWindWave90/Webcamrecorder.js",
        banner: "GaiaWindWave90/WebCamThumb.png",
        creator: "-SIPC-",
        isGitHub: true,
    },
];

const mergedExtensions = [...localExtensions, ...temporaryExtensions];
const uniqueExtensions = Array.from(new Map(
    mergedExtensions.map((extension) => [String(extension.code || extension.name), extension])
).values());

export default uniqueExtensions;
