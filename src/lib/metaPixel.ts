// util to initialize Meta Pixel client-side and track events
export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;

  // evita múltiplas injeções
  if ((window as any)._metaPixelInitialized) return;
  (window as any)._metaPixelInitialized = true;

  // padrão de snippet do Meta Pixel (fbq)
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  try {
    (window as any).fbq("init", pixelId);
    (window as any).fbq("track", "PageView");
  } catch (err) {
    // falha segura
    // console.debug('Meta Pixel init failed', err)
  }
}

// Helper para enviar eventos customizados
export function trackMetaEvent(
  eventName: string,
  params: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;
  if (!(window as any).fbq) return;
  (window as any).fbq("track", eventName, params);
}
