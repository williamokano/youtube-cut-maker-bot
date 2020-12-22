# Youtube automated cut maker
This cli is meant to automatically download a video, set a new title, and upload it to youtube under your account.

Based on youtube channels like [Cortes do Flow \[OFICIAL\]](https://www.youtube.com/channel/UC3uYvpJ3J6oNoNYRXfZXjEw) and [Cortes do Davy Jones \[OFICIAL\]](https://www.youtube.com/channel/UCUTMBmYeeK1S-wZ6Jo9WbWg).

## How to use it
This still in progress, you can use, for now, like the following command:

```bash
youtube-cut-maker -u "https://www.youtube.com/watch?v=7lvvSJyE4Ns" -t "Danilo Gentilli contando sobre o primeiro cancelado do Brasil" -s "00:07:07" -e "00:11:13"
```

## Bots and what they do
For sure this project could be simpler, like downloading and cutting on the same bot. It could, but it won't 😂.

### Downloader bot
Responsible for getting the youtube video and save it under some folder, with a unique name (video id most likely), and guarantee that it's not downloaded twice. Well, it can, but let's not do it.

### Cutter bot
Responsible for receiving 3 parameters, the file name (or video id), the starting and the ending timestamp to cut the video.

### Merger bot
Responsible for receiving a list of parameter to be prepended or appended to the video. Can be used to add channel opening videos and ending scenes. Leave the parameters blank (yet to be defined) to just uploaded the trimmed video.

### Uploader bot
Well, takes the output from all above operations and upload it to youtube. Still don't know how to do this upload, I'll probably have to add something to support oauth authentication in order to be able to upload this.

We also have some steps, that might be considered as bots (it's indeed added to the main chain) that do some other stuff, like:

### Validator step
Validates the initial input

### Normalizing step
Gets the initial input from the user and convert it to usable input to the bots. Example: converting time string, like `01:33:28` and convert it to `5608` seconds (not sure if the math is right, should be).
