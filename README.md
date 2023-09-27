# React glow

Add a mouse-tracing glow effect to React components.

See it live on [codaworks.com](https://codaworks.com).

## Usage
Wrap any number of `<Glow>` components in a `<GlowCapture>`; which will be used to track the mouse location.


```jsx
<GlowCapture>
  <Glow color='purple'>
    <span className='text-black glow:text-glow'>This will glow purple when the mouse is passed over</span>
  </Glow>
</GlowCapture>
```

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