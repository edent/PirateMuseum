# Welcome to the Pirate Museum!

[A virtual museum of "stolen" artworks](https://edent.github.io/PirateMuseum).

Take a wander around the museum and view lost paintings, stolen sculptures, and digitally liberated artworks.

As you look at the artwork, you will hear a spoken description of each one.

Use the WASD keys to move around. Click and drag your mouse to look.

https://edent.github.io/PirateMuseum

### "Pirated?"

(Adapted from [Should Wikipedia Have 3D Models of Sculptures?](https://shkspr.mobi/blog/2013/09/should-wikipedia-have-3d-models-of-sculptures/))

Is there a meaningful difference between the term "Stolen", "Pirated", "Preserved", and "Shared"?

Some of the artwork on display in this museum has been stolen - the originals snatched from the walls and hidden away.  Some are shared freely by the institutes. Others have been liberated by ersatz digital preservationists.  Can you tell which is which?

The 21st century has a mixed attitude to copyright.  Museums are often - wrongly in my opinion - [claiming copyright over works clearly in the public domain](https://www.techdirt.com/articles/20140521/18014927319/metropolitan-museum-art-claims-copyright-over-massive-trove-public-domain-works-it-has-released.shtml).  This is a [restriction on the free movement of culture](http://en.wikipedia.org/wiki/National_Portrait_Gallery_and_Wikimedia_Foundation_copyright_dispute#cite_note-Guardian-Kennedy-2009-07-14-3) and should be resisted.

We're quite used to copyright on 2D images - but what about 3D models?

Some cunning folk are going around museums and galleries and scanning in sculptures. Often without permission.

I'm not a copyright expert. I feel uncomfortable that a 3D scan of a recent sculpture can be unilaterally released by the scanner as Creative Commons - Attribution - Share Alike. The scan is undoubtedly its own work - but just as taking a photo of a portrait doesn't necessarily create a new and copyrightable piece of work, I'm not sure that a straight scan of a sculpture somehow releases the object from the bonds of copyright.

Today, we are exactly where we were with MP3s in 1998. Converting sculptures to 3D files is a niche sport for dedicated fans, it requires expensive hardware to faithfully reproduce the original art - but a modern smartphone will create a reasonable facsimile.

It is two decades since the dawn of the MP3 and our laws have barely caught up with the fact that people can reproduce movies and music in nano-seconds.

How will our copyright laws react when high quality models of sculptures are freely shared on underground art exchanges?

## Scaling 3D Models

Loading large 3D Models in the browser is *extremely* resource intensive.  2D images are trivial to resize and resample with negligible loss of perceived quality.  3D resizing is complex.

[Andrew Hazelden's Blog](http://www.andrewhazelden.com/blog/2012/04/automate-your-meshlab-workflow-with-mlx-filter-scripts/) contains an excellent tutorial on using [MeshLab](http://meshlab.sourceforge.net/) which I shall attempt to summarise.

Following the [Shapeways tutorial on polygon reduction](http://www.shapeways.com/tutorials/polygon_reduction_with_meshlab) I came up with a filter - (`32k.mlx`).  As the name suggests, this reduces any object to 32,000 triangles.  This makes the object size ~1.1MB.  The quality is sufficient for the typical VR setup of 2016.  The original models are included so that, as technology progresses, they can be viewed in all their glory.

To reduce the file size of the model, run `meshlabserver -i original.obj -o small.obj -s 32k.mlx`.

The MeshLab work only changes the *quality* of the model - not its apparent size in 3D space.  AFrame does contain a `scale` parameter, but I am not sure how efficient it is.

Models can be permanently scaled using [Obj-Magic](https://github.com/tapio/obj-magic/).  For example, to scale a model to be half its physical size, run `./obj-magic -s 0.5 -o half.obj original.obj`

I used [Blender](https://www.blender.org/) on some of the models to rotate them and re-centre them.

## Paintings

* [Francisco Goya - Portrait of the Duke of Wellington](https://en.wikipedia.org/wiki/Portrait_of_the_Duke_of_Wellington)
   * Stolen 21 August 1961
   * Public Domain
* [Van Gogh - Vase mit Pechnelken](https://en.wikipedia.org/wiki/Poppy_Flowers)
   * Stolen August 2010
   * Public Domain
* [Rembrandt - Self Portrait](https://en.wikipedia.org/wiki/List_of_stolen_paintings)
   * Stolen December 2000
   * Public Domain

## 3D Models

* ["Old Flo / Draped Seated Woman" by Henry Moore](https://en.wikipedia.org/wiki/Draped_Seated_Woman_1957%E2%80%9358)
   * [Pirated by tomburtonwood](http://www.thingiverse.com/thing:36415)
   * [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
* [Goslar Warrior 1973–1974 - Henry Moore](http://www.henry-moore.org/works-in-public/world/canary-islands-spain/tenerife-santa-cruz/santa-cruz/goslar-warrior-1973-74-lh-641)
   * [Preserved by multimediapackreplicator](https://sketchfab.com/models/d75cc66d399f430290523fa27460457f)
   * [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
* [Venus de Milo](http://www.louvre.fr/en/oeuvre-notices/aphrodite-known-venus-de-milo)
   * [Preserved by Cosmo Wenman](http://www.thingiverse.com/thing:196037) from a plaster cast.
   * [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
* [The Dancing Faun of Pompeii](https://en.wikipedia.org/wiki/House_of_the_Faun)
   * [Preserved by Cosmo Wenman](http://www.thingiverse.com/thing:196048)
   * [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
* [Figure for Landscape by Barbara Hepworth, 1960](http://barbarahepworth.org.uk/sculptures/1960/figure-for-landscape/)
   * [Preserved by Cosmo Wenman](http://www.thingiverse.com/thing:108641)
   * [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)

## Picture Frames

* [Baroque Frame](http://www.thingiverse.com/thing:763968) by levenement71
   * [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/)
* [Picture Frame 1](http://www.thingiverse.com/thing:1143582) by spileeki
   * [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)
* [Picture Frame 2](http://www.thingiverse.com/thing:319735) by akumar83
   * [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## Descriptions

The text to speech is stolen and remixed from Wikipedia under a [CC BY-SA License](https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License)

## Textures
* [Floor](http://opengameart.org/content/more-wood-panels-batch-of-16-seamless-textures-with-normalmaps-sandwithdarkgreysjpg)
   * [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)

* [Sky](https://www.flickr.com/photos/pedroscreamerovsky/6839824524/)
   * [CC BY 2.0](http://creativecommons.org/licenses/by/2.0/)

## Library
* [Aframe](https://github.com/aframevr/aframe/)
   * [MIT](https://opensource.org/licenses/MIT)
