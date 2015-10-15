import {h} from '@cycle/dom';

function renderHeightSlider(height) {
  return h('div', [
    h('labeled-slider#height', {
      key: 1, label: 'Height', unit: 'cm',
      min: 140, max: 210, initial: height
    })
  ]);
}

function renderWeightSlider(weight) {
  return h('div', [
    'Weight ' + weight + 'kg',
    h('input#weight', { type: 'range', min: 40, max: 140, value: weight })
  ]);
}

function renderToggleCheckBox(toggled) {
  return h('div', [
    h('input#toggle', { type: 'checkbox' }),
    'Toggle me',
    h('p', toggled ? 'ON': 'off')
  ]);
}

function renderFetchButton() {
  return h('div', [
    h('button#fetch', [
      'fetch'
    ])
  ]);
}

function renderPosts(posts) {
  return h('ul.posts', posts.map(({ title }) => {
    return h('li.post', [
      h('span.title', title)
    ]);
  }));
}

export default function(state$) {
  return state$.map(({ height, weight, toggled, posts }) =>
    h('div', [
      renderHeightSlider(height),
      renderWeightSlider(weight),
      renderToggleCheckBox(toggled),
      renderFetchButton(),
      renderPosts(posts)
    ])
  );
}
