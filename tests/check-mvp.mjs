import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), 'utf8'));
}

function readText(path) {
  return readFileSync(join(root, path), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  'manifest.json',
  'pages.json',
  'App.vue',
  'main.js',
  'src/data/activities.js',
  'src/data/calendar.js',
  'src/data/oysterGuide.js',
  'src/data/bobo.js',
  'src/data/community.js',
  'src/data/contact.js',
  'src/components/FrogMark.vue',
  'src/components/ContactCta.vue',
  'pages/home/index.vue',
  'pages/calendar/index.vue',
  'pages/activity/detail.vue',
  'pages/oyster-guide/index.vue',
  'pages/bobo/index.vue',
  'pages/community/index.vue',
  'pages/contact/index.vue'
];

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Missing required file: ${file}`);
}

const pages = readJson('pages.json');
const pagePaths = pages.pages.map((page) => page.path);
for (const path of [
  'pages/home/index',
  'pages/calendar/index',
  'pages/activity/detail',
  'pages/oyster-guide/index',
  'pages/bobo/index',
  'pages/community/index',
  'pages/contact/index'
]) {
  assert(pagePaths.includes(path), `pages.json is missing ${path}`);
}

const activitiesText = readText('src/data/activities.js');
for (const text of ['生蚝赶海', '流星雨', '极光', '咨询后', '安全说明', '费用说明']) {
  assert(activitiesText.includes(text), `activities data missing ${text}`);
}

const oysterGuideText = readText('src/data/oysterGuide.js');
for (const text of ['潮汐', '装备', '安全边界', 'FAQ', '不建议独自行动']) {
  assert(oysterGuideText.includes(text), `oyster guide missing ${text}`);
}

const boboPage = readText('pages/bobo/index.vue');
for (const text of ['FrogMark', 'bobo-title', 'bobobooks.de', '青蛙']) {
  assert(boboPage.includes(text), `Bobo page missing ${text}`);
}

const contactPage = readText('pages/contact/index.vue');
assert(contactPage.includes('微信'), 'Contact page must include WeChat copy');
assert(contactPage.includes('报价'), 'Contact page must explain quote flow');

const allPageText = requiredFiles
  .filter((file) => file.endsWith('.vue'))
  .map((file) => readText(file))
  .join('\n');
assert(allPageText.includes('/pages/contact/index'), 'Pages must link to contact page');
assert(!allPageText.includes(':class="`'), 'Mini program templates must not use template literals in :class');

console.log('MVP structure checks passed');
