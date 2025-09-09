export const projectsQuery = `*[_type=="project"]{
        name,
        thumbnail {
          "type": type,
           "url": select(
            defined(image.asset) => image.asset->url,
            defined(video.asset) => video.asset->url
          ),
          "lqip": select(
            type == "image" && defined(image.asset) => image.asset->metadata.lqip,
            true => null
          ),
          "width": select(
            defined(image.asset) => image.asset->metadata.dimensions.width,
            true => null
          ),
          "height": select(
            defined(image.asset) => image.asset->metadata.dimensions.height,
            true => null
          ),
          "_id": select(
            defined(video.asset) => video.asset->_id,
            defined(image.asset) => image.asset->_id
          ),
          "aspect_ratio": select(
            defined(video.asset) => video.asset->data.aspect_ratio,
            defined(image) => null
          )
        },
        slug,
      }`;

export const projectQuery = `*[_type=="project" && slug.current == $slug][0]{
    name,
    thumbnail {
      "type": type,
      "url": select(
        defined(image.asset) => image.asset->url,
        defined(video.asset) => video.asset->url
      ),
      "lqip": select(
        type == "image" && defined(image.asset) => image.asset->metadata.lqip,
        true => null
      ),
      "width": select(
        defined(image.asset) => image.asset->metadata.dimensions.width,
        true => null
      ),
      "height": select(
        defined(image.asset) => image.asset->metadata.dimensions.height,
        true => null
      ),
      "_id": select(
        defined(video.asset) => video.asset->_id,
        defined(image.asset) => image.asset->_id
      ),
      "aspect_ratio": select(
        defined(video.asset) => video.asset->data.aspect_ratio,
        defined(image) => null
      )
    },
    image_gallery[] {
      "type": _type,
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
      "_id": asset->_id,
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
