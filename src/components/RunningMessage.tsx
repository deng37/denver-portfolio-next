'use client';

export default function RunningMessage({ message }: { message: string | number }) {
  const messageString = String(message);
  const displayMessage = (messageString?.indexOf(".") == -1)
                          ? messageString
                          : messageString?.substring(0, messageString?.indexOf(".") + 3);

  return (
    <div className="custom-marquee-box">
      <div className="custom-marquee-content">
        <span>
          <a href="https://grab-your-labubu.fly.dev" className="text-decoration-none text-reset" title='labubu' target="_blank" rel="noopener noreferrer">
            <img src="/img/labubu-run.webp" className="labubu-image" />
            Can you grab your labubu? Fastest grabber: {displayMessage} ms • Powered by
            <img src="/img/go.webp" className="gopher-image" />
          </a>
        </span>
      </div>
    </div>
  );
}