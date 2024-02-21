# react-skel-wrapper

A React component library for easily creating skeleton loaders to enhance user experience during content loading times. The `react-skel-wrapper` package allows developers to implement skeleton screens in their React applications, providing a smooth and engaging user experience while the content is being loaded.

## Features

- **Easy Integration:** Seamlessly integrates with your React application.
- **TypeScript Support:** Comes with TypeScript typings for better development experience.
- **Customizable:** Easily customize the size, shape, and animation of your skeleton loaders.
- **Repeat Component:** Utilize the `Repeat` component to replicate skeleton loaders, reducing boilerplate code.

## Installation

You can install `react-skel-wrapper` using npm or yarn:

```bash
npm install react-skel-wrapper
```

or

```bash
yarn add react-skel-wrapper
```

## Usage

Here is a simple example of how to use `react-skel-wrapper` in your React application:

```jsx
import React, { useEffect, useState } from "react";
import SkelWrapper, { Repeat } from "react-skel-wrapper";

function App() {
  const [loading, setLoading] = useState < boolean > true;

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Repeat amount={2} loading={loading}>
        <SkelWrapper width={300} height={100} uprise loading={loading}>
          <p style={{ fontSize: 40 }}>Hello world.</p>
        </SkelWrapper>
        <SkelWrapper height={20} uprise loading={loading}>
          <p>2024.02.20</p>
        </SkelWrapper>
        <SkelWrapper uprise loading={loading}>
          <p>handle, carmerce</p>
        </SkelWrapper>
      </Repeat>
    </>
  );
}

export default App;
```

## Example Result

![Example Skeleton Loader](https://storage.googleapis.com/handle-public-image/carmerce/skel-wrapper-ex.gif)

## TypeScript Support

`react-skel-wrapper` fully supports usage in a TypeScript environment. All necessary type definitions are included, allowing for easy integration into TypeScript projects.

## Contributing

Interested in contributing to the `react-skel-wrapper` project? Visit our GitHub page to learn more about how you can contribute.

## License

`react-skel-wrapper` is distributed under the MIT License. For more details, refer to the LICENSE file in the project.

## Author

Handle Corp, Jaeyeon Kim <jykim@carmerce.co.kr>
