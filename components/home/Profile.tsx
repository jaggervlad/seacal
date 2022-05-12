const Profile = () => (
  <div className="flex flex-col-reverse items-start sm:flex-row">
    <div className="flex flex-col pr-8">
      <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
        Sebastian Acosta
      </h1>
      <h2 className="mb-4 text-xl font-bold text-slate-700 dark:text-slate-200">
        Desarrollador Web Fullstack
      </h2>
      <p className="mb-8 text-slate-600 dark:text-slate-400">
        Enfocado en la innovasión tecnológica, en constante aprendizaje de
        nuevas tecnologías en desarrollo web para ofrecer el mejor servicio.
      </p>
    </div>
    {/* <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
      <Image
        alt="Sebastian Acosta"
        height={200}
        width={200}
        src="/images/profile.jpeg"
        className="rounded-full"
      />
    </div> */}
  </div>
);

export default Profile;
