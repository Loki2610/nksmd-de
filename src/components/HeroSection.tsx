
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Maximize2, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // iOS and mobile detection
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Safari detection
  const isSafari = () => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  };

  useEffect(() => {
    // For iOS/mobile devices, show play button immediately
    if (isIOS() || isMobile()) {
      console.log('Mobile/iOS device detected - showing play button');
      setShowPlayButton(true);
      setIsVideoLoading(false);
      return;
    }

    const playVideo = async () => {
      if (videoRef.current) {
        try {
          setIsVideoLoading(true);
          
          // Wait for video to be ready
          if (videoRef.current.readyState < 3) {
            await new Promise((resolve) => {
              const onCanPlay = () => {
                videoRef.current?.removeEventListener('canplaythrough', onCanPlay);
                resolve(void 0);
              };
              videoRef.current?.addEventListener('canplaythrough', onCanPlay);
            });
          }

          await videoRef.current.play();
          console.log('Video started automatically');
          setShowPlayButton(false);
          setIsVideoLoading(false);
        } catch (error) {
          console.log('Autoplay was prevented by browser:', error);
          setShowPlayButton(true);
          setIsVideoLoading(false);
        }
      }
    };

    // Use Intersection Observer for better autoplay timing (desktop only)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              playVideo();
            }, isSafari() ? 500 : 100);
            
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoError = (error: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Video loading error:', error);
    console.log('Video source path:', '/lovable-uploads/architect-video.mp4');
    setShowPlayButton(true);
    setIsVideoLoading(false);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  const handleVideoLoadStart = () => {
    console.log('Video loading started');
    setIsVideoLoading(true);
  };

  const handleCanPlayThrough = () => {
    console.log('Video can play through');
    if (!isMobile() && !isIOS()) {
      setIsVideoLoading(false);
    }
  };

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handlePlayButtonClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setShowPlayButton(false);
        console.log('Video started manually');
      } catch (error) {
        console.error('Manual play failed:', error);
      }
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-architect-dark leading-tight">
                Architektonische Expertise für Ihr Bauunternehmen
              </h1>
              <p className="mt-6 text-lg text-architect-muted max-w-2xl mx-auto lg:mx-0">
                Spezialisiert auf Planung und Genehmigungsmanagement für Bauunternehmen, Fertighaushersteller und Generalunternehmer. Mit über 10 Jahren Erfahrung und erfolgreichen Projekten in Deutschland und Österreich.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="cta-button group">
                  Projekt besprechen
                  <ArrowRight className="inline-block ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="text-architect-dark border border-gray-300 hover:border-architect-dark font-semibold py-3 px-8 rounded-md transition-all duration-200 inline-block text-center">
                  Mehr erfahren
                </a>
              </div>
              <div className="mt-8 text-architect-muted text-sm">
                <p className="font-semibold">Mitglied der Bayerischen Architektenkammer</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Video Container with 16:9 Aspect Ratio */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <div className="relative h-full w-full" onClick={handleVideoClick}>
                      <video 
                        ref={videoRef} 
                        className="object-cover h-full w-full" 
                        loop 
                        muted 
                        playsInline
                        webkit-playsinline="true"
                        x-webkit-airplay="allow"
                        preload={isMobile() || isIOS() ? "metadata" : "auto"}
                        poster="/lovable-uploads/95f0d079-7126-47a6-adcb-cdf3a0144a8d.png"
                        aria-label="Architekt bei der Arbeit" 
                        data-lovable="video" 
                        data-lovable-type="video" 
                        onError={handleVideoError} 
                        onLoadedData={handleVideoLoad} 
                        onLoadStart={handleVideoLoadStart}
                        onCanPlayThrough={handleCanPlayThrough}
                      >
                        <source src="/lovable-uploads/architect-video.mp4" type="video/mp4" data-lovable="video-source" />
                        {/* Fallback für Browser ohne Video-Support */}
                        <img src="/lovable-uploads/95f0d079-7126-47a6-adcb-cdf3a0144a8d.png" alt="Modernes Architekturprojekt" className="object-cover h-full w-full" data-lovable="fallback-image" />
                      </video>
                      
                      {/* Loading Indicator - nur für Desktop */}
                      {isVideoLoading && !isMobile() && !isIOS() && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="bg-white bg-opacity-90 rounded-full p-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-architect-dark"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Play Button - für mobile Geräte und Fallback */}
                      {showPlayButton && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <button 
                            onClick={handlePlayButtonClick}
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 md:p-6 transition-all duration-200 touch-manipulation"
                            aria-label="Video abspielen"
                          >
                            <Play className="h-8 w-8 md:h-10 md:w-10 text-architect-dark ml-1" />
                          </button>
                        </div>
                      )}
                      
                      {/* Hover Overlay with Expand Icon - nur für Desktop */}
                      {!showPlayButton && !isVideoLoading && !isMobile() && !isIOS() && (
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white bg-opacity-90 rounded-full p-3">
                              <Maximize2 className="h-6 w-6 text-architect-dark" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-5xl w-full bg-black border-none p-0 [&>button]:hidden">
                    <div className="relative">
                      {/* Custom Close Button - positioned outside video area */}
                      <button 
                        onClick={() => setIsModalOpen(false)} 
                        aria-label="Video schließen" 
                        className="absolute -top-12 right-0 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 transition-all duration-200 text-white rounded-full border-0 outline-none focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      {/* Video Container */}
                      <div className="relative aspect-video w-full">
                        <video 
                          className="w-full h-full object-contain" 
                          controls 
                          autoPlay 
                          loop 
                          preload="auto" 
                          aria-label="Architekt bei der Arbeit - Vergrößerte Ansicht"
                          controlsList="nodownload"
                        >
                          <source src="/lovable-uploads/architect-video.mp4" type="video/mp4" />
                          {/* Fallback für Browser ohne Video-Support */}
                          <img src="/lovable-uploads/95f0d079-7126-47a6-adcb-cdf3a0144a8d.png" alt="Modernes Architekturprojekt" className="object-contain w-full h-full" />
                        </video>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
