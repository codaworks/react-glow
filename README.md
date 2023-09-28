# React glow

Add a mouse-tracing glow effect to React components.

![gif of glow effect](./media/glow.gif)

The glow effect will only work using the mouse as the pointer. Touch events will not trigger it.

See it live on [codaworks.com](https://codaworks.com).


## Installation
Install the package with npm:

```shell
npm i @codaworks/react-glow
```

## Usage
Wrap any number of `<Glow>` components in a `<GlowCapture>` which will be used to track the mouse location.


```jsx
<GlowCapture>
  <span>This won't glow</span>
  <Glow color='purple'>
    <span className='text-black glow:text-glow/50 glow:bg-red-100'>
      This will glow purple when the mouse is passed over
    </span>
  </Glow>
</GlowCapture>
```

Children of `<Glow>` can style themselves how to look when glowing. You might choose to leave some children unchanged, or highlight them with the `glow:` variant style.

The value of `color` will be available as a CSS variable `--glow-color`, as well as the Tailwind `glow` color. 
You can pass any valid CSS color, including `hsl()` values etc.
Of course, you might choose to use any other color; you can leave out the `color` prop entirely.


## Tailwind
Add the tailwind plugin to unlock the `glow:` variant and `glow` color

`tailwind.config.js`
```js
module.exports = {
  ...
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
}
```

As with all colors in Tailwind, you may add opacity by appending a percentage after the color, such as `bg-glow/20` for 20% opacity.

## Vanilla CSS
You can style the glow effect with vanilla CSS:


```jsx
<GlowCapture>
  <span>This won't glow</span>
  <Glow color='hsl(338.69 100% 48.04%)'>
    <span className='glowable-text'>
      This will glow pink when the mouse is passed over
    </span>
  </Glow>
</GlowCapture>
```

```css
.glowable-text {
  color: black;
}

[glow] .glowable-text {
  color: var(--glow-color);
}
```

## Attribution
Inspired by [this tweet](https://twitter.com/codepen/status/1696297659663888490).