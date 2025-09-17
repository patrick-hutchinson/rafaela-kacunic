export const projectsQuery = `*[_type=="project"] | order(orderRank){
      name,
      orderRank,
      year,
      about,
      service,
      client,
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
      thumbnail{
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
        slug,
      }`;

export const homeQuery = `*[_type=="home"][0]{tagline}`;

export const aboutQuery = `*[_type == "about"][0]{
        about,          
        services,       
        socials[]{      
          platform,
          link
        },
        email,
        badland         
      }`;

export const legalQuery = `*[_type=="legal"][0]{imprint, privacy_policy}`;
