import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout>
      <div className=" bg-black text-slate-100 grid grid-flow-col grid-cols-2 px-20 py-12 ">
        <div>
          <h2 className="text-5xl">About Eric</h2>
          <div className="w-1/2 pt-5">
            <Image
              src="/static/shelton.png"
              width={1000}
              height={1000}
              layout="responsive"
              objectFit="contain"
              alt="Hello There"
            />
          </div>
        </div>

        <div className="text-xl pt-14">
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget
            egestas. Pulvinar sapien et ligula ullamcorper malesuada proin.
            Purus in massa tempor nec feugiat. Habitasse platea dictumst
            vestibulum rhoncus est. Lorem mollis aliquam ut porttitor leo a
            diam. Neque ornare aenean euismod elementum nisi quis eleifend quam
            adipiscing. Mauris pharetra et ultrices neque ornare aenean euismod
            elementum. Nunc sed id semper risus in. Orci eu lobortis elementum
            nibh. Sit amet porttitor eget dolor morbi non arcu risus. Tempus
            egestas sed sed risus pretium quam. Ac ut consequat semper viverra
            nam libero justo laoreet sit. Scelerisque varius morbi enim nunc
            faucibus. Lacus vel facilisis volutpat est velit egestas. Cursus in
            hac habitasse platea dictumst quisque sagittis purus. Cursus turpis
            massa tincidunt dui ut ornare. Adipiscing bibendum est ultricies
            integer quis auctor elit.
          </p>
          <p>
            Sit amet dictum sit amet. Elit at imperdiet dui accumsan sit amet.
            Nam at lectus urna duis convallis convallis. Scelerisque felis
            imperdiet proin fermentum leo vel. Facilisis sed odio morbi quis
            commodo odio aenean sed. Gravida dictum fusce ut placerat. Posuere
            ac ut consequat semper viverra nam libero justo. Molestie a iaculis
            at erat pellentesque adipiscing. Odio pellentesque diam volutpat
            commodo. Vitae turpis massa sed elementum tempus. In fermentum
            posuere urna nec tincidunt praesent semper.
          </p>
        </div>
      </div>
      <section className="bg-black h-2/4 text-slate-100">
        <h3 className="text-center text-5xl">Contact</h3>
        <p></p>
      </section>
    </Layout>
  );
}
