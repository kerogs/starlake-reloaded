# Configuration
We recommend reading this file to help you understand how to modify each part.

> [!NOTE]
> Each modification can be made in the ``/config.js`` file provided for this purpose.

## Services
Services represents the button with an image at the top right of the page.
It lets you add shortcut buttons to quickly redirect to different services.

### Change services images
You can change the image to your profile photo (or other) simply by replacing the file in ``/avatar.png`` and modifying the value in config.js (if required). You can use full url if you want.
```js
const googleServices = {
    "image": "avatar.png",
}
```

### Change services title
Simply change the value to the desired text
```js
const googleServices = {
    "title": "Google Services",
}
```

### Add, modify and delete services
You can create several service categories (separated by a line). Each service requires 3 values: ``ìcon``, ``name``, ``url``. They are all required to function correctly.

To create categories, simply put them in a different table, as in the example below
```js
const googleServices = {
    "groups": [
        // category 1
        [
            {
                "name": "Service1",
                "icon": "icon1",
                "url": "https://url1.kn",
            },
            {
                "name": "Service2",
                "icon": "icon2",
                "url": "https://url2.kn",
            },
        ],

        // category 2
        [
            {
                "name": "Service1",
                "icon": "icon1",
                "url": "https://url1.kn",
            },
            {
                "name": "Service2",
                "icon": "icon2",
                "url": "https://url2.kn",
            },
        ],

        // add more category here if you want
    ],
}
```