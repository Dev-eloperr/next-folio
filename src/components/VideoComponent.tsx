export default function VideoComponent({ url }: { url: string }) {
    return (
      <video autoPlay loop muted controls preload="none" aria-label="Video player" className="w-full rounded-md">
        <source src={url} type="video/mp4" />
        {/* <track src={captionsUrl} kind="subtitles" srcLang="en" label="English" /> */}
        Your browser does not support the video tag.
      </video>
    )
}