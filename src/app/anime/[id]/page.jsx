import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);
  return (
    <>
      <div className="w-[100vw]">
        <div className="w-[95vw] md:my-10 mx-auto my-2 flex flex-wrap items-center">
          {/* main card  */}
          <div className="card w-96 shadow-xl mb-2 bg-base-100 border-white border-2">
            <div className="card-body">
              <h2 className="card-title">{anime.data.title}</h2>
              <p>
                {anime.data.season} - {anime.data.year}
              </p>
            </div>
            <figure>
              <Image
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={200}
                height={400}
              />
            </figure>
            <div class="card-body">
              <div class="card-actions justify-end">
                {anime.data.genres.map((genres, index) => {
                  return (
                    <div className="badge badge-outline" key={index}>
                      {genres.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* end main card  */}

          {/* detail  */}
          <div>
            <div class="card max-w-[900px] bg-base-100 shadow-xl border-white border-2 md:mx-2">
              <div class="card-body">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                  <div className="stat">
                    <div className="stat-title">Rank</div>
                    <div className="stat-value">{anime.data.rank}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Score</div>
                    <div className="stat-value">{anime.data.score}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Favorites</div>
                    <div className="stat-value">{anime.data.favorites}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Members</div>
                    <div className="stat-value">{anime.data.members}</div>
                  </div>
                </div>
                <p className="text-justify">{anime.data.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end content  */}

      {/* vidio player  */}
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
