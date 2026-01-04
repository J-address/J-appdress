const gradientStyle = {
  backgroundImage:
    'linear-gradient(135deg, #114CEE 0%, #0F399F 30%, #000000 55%, #F78D00 80%)',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen' style={gradientStyle}>
      <div className='mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 text-white'>
        <header className='flex flex-col gap-4 rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur'>
          <div>
            <p className='text-xs uppercase tracking-[0.3em] text-white/70'>サポート</p>
            <h1 className='text-3xl font-bold sm:text-4xl'>お問い合わせ</h1>
            <p className='mt-2 max-w-3xl text-base text-white/80'>
              お気軽にお問い合わせください。通常3日以内にできるだけ早くご返信いたします。
            </p>
          </div>
        </header>

        <section className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70'>
              お問い合わせ先
            </div>
            <p className='max-w-2xl text-lg leading-relaxed text-white/80'>
              営業時間内のみお問い合わせください。祝日や休業日はご対応できない場合があります。
            </p>
            <div className='h-4' aria-hidden />
            <div className='divide-y divide-white/10 rounded-2xl border border-white/10 px-4 py-3 text-base leading-relaxed text-white/85 shadow-lg backdrop-blur'>
              <div className='flex items-center justify-between gap-4 py-3'>
                <span className='text-white/90'>電話番号</span>
                <span className='text-white/70'>0476-55-2080</span>
              </div>
              <div className='flex items-center justify-between gap-4 py-3'>
                <span className='text-white/90'>営業時間</span>
                <span className='text-white/70'>月曜日～金曜日 09:00-18:00</span>
              </div>
              <div className='flex items-center justify-between gap-4 py-3'>
                <span className='text-white/90'>メール</span>
                <span className='text-white/70'>info@jaddress.com</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 text-base leading-relaxed text-white/85 shadow-2xl backdrop-blur'>
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>返信がない場合</p>
              <h2 className='mt-1 text-2xl font-semibold text-white'>返信が届いていませんか？</h2>
            </div>
            <p>
              <span className='font-semibold'>info@jaddress.com</span>から48時間以内（平日）にご返信いたします。
              まず迷惑メールフォルダをご確認ください。
            </p>
            <p>それでも届いていない場合は、こちらにお問い合わせください：</p>
            <div className='space-y-2 rounded-xl border border-white/10 bg-white/5 p-4'>
              <p className='text-white'>メール: <span className='font-semibold'>t.jaddress@gmail.com</span></p>
              <p className='text-white'>電話: <span className='font-semibold'>080-5054-4093</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
