export const projectsQuery = `*[_type=="project"]{
        thumbnail {
          "type": select(
            defined(image) => "image",
            defined(video) => "video"
          ),
          "url": coalesce(image.asset->url, video.asset->url),
          "lqip": image.asset->metadata.lqip,
          "width": image.asset->metadata.dimensions.width,
          "height": image.asset->metadata.dimensions.height,
          "_id": coalesce(video.asset->_id, image.asset->_id),
          "aspect_ratio": select(
            defined(video.asset) => video.asset->data.aspect_ratio,
            defined(image) => null
          )
        },
        slug,
      }`;

export const projectQuery = `*[_type=="project" && slug.current == $slug][0]{
    name,
    year,
    orderRank,
    thumbnail {
      "type": select(
        defined(image) => "image",
        defined(video) => "video"
      ),
      "url": coalesce(image.asset->url, video.asset->url),
      "lqip": image.asset->metadata.lqip,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      "_id": coalesce(video.asset->_id, image.asset->_id),
      "aspect_ratio": select(
        defined(video.asset) => video.asset->data.aspect_ratio,
        defined(image) => null
      )
    },
    imagegallery[]{
      "type": select(defined(image) => "image", defined(video) => "video"),
      "_id": select(
        defined(image.asset) => image.asset->_id,
        defined(video.asset) => video.asset->_id,
        true => null
      ),
      "url": select(defined(image.asset) => image.asset->url, true => null),
      "lqip": select(defined(image.asset) => image.asset->metadata.lqip, true => null),
      "width": select(defined(image.asset) => image.asset->metadata.dimensions.width, true => null),
      "height": select(defined(image.asset) => image.asset->metadata.dimensions.height, true => null),
      "status": select(defined(video.asset) => video.asset->status, true => null),
      "assetId": select(defined(video.asset) => video.asset->assetId, true => null),
      "playbackId": select(defined(video.asset) => video.asset->playbackId, true => null),
      "aspect_ratio": select(
        defined(video.asset) => video.asset->data.aspect_ratio,
        defined(image) => null
      )
    },
    about,
    slug
  }`;

export const homeQuery = `*[_type=="home"][0]{tagline}`;

export const aboutQuery = `*[_type == "about"][0]{
        about,          
        services,       
        socials[]{      
          platform,
          link
        },
        badland         
      }`;

export const legalQuery = `*[_type=="legal"][0]{imprint, privacy_policy}`;
