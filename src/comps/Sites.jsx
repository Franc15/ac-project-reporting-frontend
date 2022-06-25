import SiteItem from "./SiteItem";

export default function Sites() {
  return (
    <section class="text-gray-600 body-font">
      <div className="p-4">
        <h1 className="text-4xl font-large title-font mb-4 text-gray-900">
          Hey partner
        </h1>
        <p className="text-base leading-relaxed text-gray-600">
          Here are the sites you have access to
        </p>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          <SiteItem />
          <SiteItem />
          <SiteItem />
        </div>
      </div>
    </section>
  );
}
