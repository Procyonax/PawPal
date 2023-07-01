package com.example.petService.components;

import com.example.petService.models.Breed;
import com.example.petService.models.DogFact;
import com.example.petService.repository.BreedRepository;
import com.example.petService.repository.DogFactsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test") //Run every time EXCEPT tests
@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    BreedRepository breedRepository;

    @Autowired
    DogFactsRepository dogFactsRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) throws Exception {

        DogFact fact1 = new DogFact("All dogs are identical in anatomy, with 321 bones and 42 permanent teeth.");
        dogFactsRepository.save(fact1);
        DogFact fact2 = new DogFact("All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.");
        dogFactsRepository.save(fact2);
        DogFact fact3 = new DogFact("Dogs like to chew bones but cooked bones and bones that can splinter such as cooked chicken bones should not be given to dogs.");
        dogFactsRepository.save(fact3);
        DogFact fact4 = new DogFact("A dog can both sniff and breathe at the same time.");
        dogFactsRepository.save(fact4);
        DogFact fact5 = new DogFact("There are an estimated 400 million dogs in the world.");
        dogFactsRepository.save(fact5);
        DogFact fact6 = new DogFact("Dogs do have better low-light vision than humans because of a special light-reflecting layer behind their retinas.");
        dogFactsRepository.save(fact6);
        DogFact fact7 = new DogFact("Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit.");
        dogFactsRepository.save(fact7);
        DogFact fact8 = new DogFact("A Beatles hit. It’s rumored that, at the end of the Beatles song, \"A Day in the Life,\" Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.");
        dogFactsRepository.save(fact8);
        DogFact fact9 = new DogFact("Most experts believe humans domesticated dogs before donkeys, horses, sheep, goats, cattle, cats, or chickens.");
        dogFactsRepository.save(fact9);
        DogFact fact10 = new DogFact("In Iran, it is against the law to own a dog as a pet. However, if an owner can prove the dog is a guard or hunting dog, this restriction doesn’t apply. Muslim reticence concerning dogs is perhaps due to the fact that rabies has always been endemic in the Middle East.");
        dogFactsRepository.save(fact10);
        DogFact fact11 = new DogFact("Conservationists have used dogs to find bumblebee hives in order to protect endangered species.");
        dogFactsRepository.save(fact11);
        DogFact fact12 = new DogFact("Bloodhound dogs have a keen sense of smell and have been used since the Middle Ages to track criminals.");
        dogFactsRepository.save(fact12);
        DogFact fact13 = new DogFact("Dogs have been bred for a variety of purposes, including hunting, guarding, and companionship.");
        dogFactsRepository.save(fact13);
        DogFact fact14 = new DogFact("The longer a dog’s nose, the more effective it’s internal cooling system.");
        dogFactsRepository.save(fact14);
        DogFact fact15 = new DogFact("The Chihuahua was named after the state in Mexico where they were discovered.");
        dogFactsRepository.save(fact15);
        DogFact fact16 = new DogFact("Flyball, a dog sport consisting of relays, hurdles, and ball retrieving, was developed in the late 60s, and the first tournament was held in 1983.");
        dogFactsRepository.save(fact16);
        DogFact fact17 = new DogFact("President Franklin Roosevelt created a minor international incident when he claimed he sent a destroyer to the Aleutian Islands just to pick up his Scottish Terrier, Fala, who had been left behind.");
        dogFactsRepository.save(fact17);
        DogFact fact18 = new DogFact("Dogs can smell about 1,000 times better than humans. While humans have 5 million smell-detecting cells, dogs have more than 220 million. The part of the brain that interprets smell is also four times larger in dogs than in humans.");
        dogFactsRepository.save(fact18);
        DogFact fact19 = new DogFact("The ancient religion Zoroastrianism includes in its religious text titled the Zend Avesta a section devoted to the care and breeding of dogs.");
        dogFactsRepository.save(fact19);
        DogFact fact20 = new DogFact("There are nearly 14,000 animal shelters and rescue groups across North America.");
        dogFactsRepository.save(fact20);
        DogFact fact21 = new DogFact("Dogs are pack animals -- they don't enjoy being alone.");
        dogFactsRepository.save(fact21);
        DogFact fact22 = new DogFact("The normal body temperature of a dog is 100.94 degrees Fahrenheit (38.3 Celsius) to 102.56 F (39.2 C) whereas human normal body temperature 98.6 F (37 C).");
        dogFactsRepository.save(fact22);
        DogFact fact23 = new DogFact("The world's smallest dog was a Chihuahua named Miracle Milly, who weighed only 1.1 pounds.");
        dogFactsRepository.save(fact23);
        DogFact fact24 = new DogFact("The average dog can run at speeds of up to 19mph.");
        dogFactsRepository.save(fact24);
        DogFact fact25 = new DogFact("Seventy percent of people sign their pet’s name on greeting and holiday cards.");
        dogFactsRepository.save(fact25);
        DogFact fact26 = new DogFact("Humans have kept dogs as pets for over 12,000 years.");
        dogFactsRepository.save(fact26);
        DogFact fact27 = new DogFact("Service dogs are recognized in the U.S. as 'necessary medical equipment.'");
        dogFactsRepository.save(fact27);
        DogFact fact28 = new DogFact("In 2003, Dr. Roger Mugford invented the 'wagometer,' a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.");
        dogFactsRepository.save(fact28);
        DogFact fact29 = new DogFact("A dog's nose is the equivalent of a human's fingerprints, as no two dogs have the same nose print.");
        dogFactsRepository.save(fact29);
        DogFact fact30 = new DogFact("The Girl Scouts and Boy Scouts both offer merit badges in dog care.");
        dogFactsRepository.save(fact30);
        DogFact fact31 = new DogFact("When dogs copulate, it is very normal for them to get stuck together and it may last for up to 45 minutes.");
        dogFactsRepository.save(fact31);
        DogFact fact32 = new DogFact("Fifty-eight percent of people put pets in family and holiday portraits.");
        dogFactsRepository.save(fact32);
        DogFact fact33 = new DogFact("Two Labradors, Lucky and Flo, were the first dogs known for sniffing out pirated DVDs.");
        dogFactsRepository.save(fact33);
        DogFact fact34 = new DogFact("Dogs like sweets a lot more than cats do. While cats have around only 473 taste buds, dogs have about 1,700 taste buds. Humans have approximately 9,000.");
        dogFactsRepository.save(fact34);
        DogFact fact35 = new DogFact("New puppies have heat sensors in their noses to help find their moms while their eyes and ears are closed.");
        dogFactsRepository.save(fact35);
        DogFact fact36 = new DogFact("The smallest known adult dog was a Yorkshire Terrier that was only 2.5 inches at the shoulder, and weighed only 4 ounces.");
        dogFactsRepository.save(fact36);
        DogFact fact37 = new DogFact("Some dogs have shown remarkable ability to detect certain cancers.");
        dogFactsRepository.save(fact37);
        DogFact fact38 = new DogFact("A dog’s pregnancy lasts for approximately 60 days.");
        dogFactsRepository.save(fact38);
        DogFact fact39 = new DogFact("Dogs can suffer from separation anxiety if they are left alone for long periods of time.");
        dogFactsRepository.save(fact39);
        DogFact fact40 = new DogFact("Puppies grow to half their body weight in the first four to five months!");
        dogFactsRepository.save(fact40);
        DogFact fact41 = new DogFact("Dogs who have been spayed or neutered live longer than intact dogs.");
        dogFactsRepository.save(fact41);
        DogFact fact42 = new DogFact("The border collie or sheep dog is often considered to be the most intelligent breed of dog some of them have been trained to recognize the words for up to 1,000 objects and retrieved them by verbal command.");
        dogFactsRepository.save(fact42);
        DogFact fact43 = new DogFact("When dogs have been doing a lot of exercise, they pant. It is not because they are out of breath like a human would be. Dogs have developed the method of losing heat by panting because sweating would not be very efficient due to all the fur.");
        dogFactsRepository.save(fact43);
        DogFact fact44 = new DogFact("The Labrador is so popular, in 2006 there were approximately 3-5 times more Labs as there were German Shepherds or Golden Retrievers.");
        dogFactsRepository.save(fact44);
        DogFact fact45 = new DogFact("The oldest dog on record was a Australian Cattle Dog named Bluey, who lived to be 29 years and 5 months old.");
        dogFactsRepository.save(fact45);
        DogFact fact46 = new DogFact("A dog's sense of smell is reduced by up to 40 percent when he's overheated and panting.");
        dogFactsRepository.save(fact46);
        DogFact fact47 = new DogFact("n ancient China, an emperor's last line of defense was a small Pekingese dog literally hidden up his sleeve.");
        dogFactsRepository.save(fact47);
        DogFact fact48 = new DogFact("An African wolf dog known as the Basenji is the only dog in the world that cannot bark.");
        dogFactsRepository.save(fact48);
        DogFact fact49 = new DogFact("Hollywood’s first and arguably best canine superstar was Rin Tin Tin, a five-day-old German Shepherd found wounded in battle in WWI France and adopted by an American soldier, Lee Duncan. He would sign his own contracts with his paw print.");
        dogFactsRepository.save(fact49);
        DogFact fact50 = new DogFact("The world's largest dog was a Great Dane named Zorba, who weighed 343 pounds.");
        dogFactsRepository.save(fact50);


        Breed boxer = new Breed("Boxer",
                3,
                4,
                4,
                "Medium",
                3,
                2,
                1,
                3,
                4,
                4,
                3,
                4,
                2,
                "boxer.jpg",
                "Boxers are medium-sized dogs known for their muscular build and playful nature. They are energetic and require regular exercise to stay happy and healthy. Boxers are loyal and protective, making them great companions and family dogs.");
        breedRepository.save(boxer);

        Breed berneseMountainDog = new Breed("Bernese Mountain Dog",
                3,
                4,
                4,
                "Large",
                4,
                4,
                1,
                2,
                4,
                5,
                5,
                5,
                2,
                "bernese_mountain_dog.jpg",
                "Bernese Mountain Dogs are large and sturdy working dogs originating from Switzerland. They have a thick, tri-colored coat and a gentle and friendly nature. Bernese Mountain Dogs are known for their loyalty and make excellent family pets.");
        breedRepository.save(berneseMountainDog);

        Breed pomeranian = new Breed("Pomeranian",
                3,
                3,
                3,
                "Small",
                1,
                4,
                1,
                4,
                2,
                4,
                3,
                3,
                2,
                "pomeranian.jpg",
                "Pomeranians are small and lively dogs known for their fluffy double coat. They are confident and outgoing and often have a bold personality. Pomeranians require regular grooming to maintain their coat's appearance.");
        breedRepository.save(pomeranian);

        Breed rhodesianRidgeback = new Breed("Rhodesian Ridgeback",
                3,
                4,
                5,
                "Large",
                2,
                2,
                1,
                2,
                4,
                4,
                3,
                3,
                4,
                "rhodesian_ridgeback.jpg",
                "Rhodesian Ridgebacks are large and athletic dogs originally bred in Southern Africa. They are known for the ridge of hair along their back that grows in the opposite direction. Rhodesian Ridgebacks are loyal, protective, and make excellent guard dogs.");
        breedRepository.save(rhodesianRidgeback);

        Breed caneCorso = new Breed("Cane Corso",
                4,
                3,
                4,
                "Large",
                3,
                2,
                1,
                3,
                5,
                3,
                3,
                3,
                4,
                "cane_corso.jpg",
                "Cane Corsos are powerful and muscular dogs originating from Italy. They have a strong guarding instinct and are known for their loyalty and protective nature. Cane Corsos require early socialization and consistent training.");
        breedRepository.save(caneCorso);

        Breed basenji = new Breed("Basenji",
                3,
                4,
                4,
                "Medium",
                1,
                2,
                3,
                1,
                2,
                3,
                3,
                3,
                5,
                "basenji.jpg",
                "Basenjis are small and energetic dogs known for their unique yodel-like vocalization and cat-like grooming habits. They are independent and intelligent, with a curious and alert nature. Basenjis require mental stimulation and exercise to prevent boredom.");
        breedRepository.save(basenji);

        Breed irishWolfHound = new Breed("Irish Wolfhound",
                3,
                4,
                4,
                "Giant",
                2,
                3,
                1,
                2,
                3,
                4,
                4,
                4,
                3,
                "irish_wolfhound.jpg",
                "Irish Wolfhounds are the tallest dog breed in the world and have a gentle and friendly nature. Despite their large size, they are known for their calm and even-tempered demeanor. Irish Wolfhounds are loyal and make wonderful family pets.");
        breedRepository.save(irishWolfHound);

        Breed bichonFrise = new Breed("Bichon Frise",
                4,
                3,
                3,
                "Small",
                1,
                5,
                5,
                2,
                1,
                5,
                4,
                4,
                2,
                "bichon_frise.jpg",
                "Bichon Frises are small and cheerful dogs known for their fluffy white coat and playful personality. They are friendly, sociable, and make great companions. Bichon Frises are often recommended for people with allergies due to their hypoallergenic coat.");
        breedRepository.save(bichonFrise);

        Breed greatDane = new Breed("Great Dane",
                3,
                4,
                4,
                "Giant",
                4,
                2,
                1,
                2,
                3,
                4,
                4,
                4,
                2,
                "great_dane.jpg",
                "Great Danes are one of the largest dog breeds known for their imposing size and gentle nature. Despite their stature, they are often referred to as the 'gentle giants.' Great Danes are friendly, patient, and make loyal family companions.");
        breedRepository.save(greatDane);

        Breed shibaInu = new Breed("Shiba Inu",
                3,
                3,
                4,
                "Medium",
                2,
                3,
                3,
                4,
                3,
                3,
                3,
                3,
                5,
                "shiba_inu.jpg",
                "Shiba Inus are small and agile dogs originating from Japan. They have a spirited and independent nature, often displaying cat-like behaviors. Shiba Inus are known for their alertness, loyalty, and their beautiful fox-like appearance.");
        breedRepository.save(shibaInu);

        Breed australianCattleDog = new Breed("Australian Cattle Dog",
                4,
                3,
                5,
                "Medium",
                1,
                2,
                1,
                3,
                4,
                3,
                3,
                3,
                4,
                "australian_cattle_dog.jpg",
                "Australian Cattle Dogs, also known as Blue Heelers or Queensland Heelers, are intelligent and active dogs originally bred for herding livestock. They are known for their endurance, agility, and their distinctive coat patterns.");
        breedRepository.save(australianCattleDog);

        Breed leonberger = new Breed("Leonberger",
                4,
                4,
                4,
                "Giant",
                4,
                3,
                1,
                2,
                4,
                4,
                4,
                5,
                2,
                "leonberger.jpg",
                "Leonbergers are large and majestic dogs with a gentle and friendly disposition. They were originally bred as working dogs but are now known for their loyalty and their suitability as family pets. Leonbergers have a thick coat and a distinctive lion-like appearance.");
        breedRepository.save(leonberger);

        Breed bassetHound = new Breed("Basset Hound",
                3,
                4,
                2,
                "Medium",
                5,
                2,
                1,
                2,
                2,
                5,
                5,
                4,
                2,
                "basset_hound.jpg",
                "Basset Hounds are low-slung and long-eared dogs known for their excellent sense of smell and calm temperament. They are friendly, patient, and make great family pets. Basset Hounds may have a stubborn streak but respond well to positive reinforcement training.");
        breedRepository.save(bassetHound);

        Breed puli = new Breed("Puli",
                3,
                3,
                4,
                "Medium",
                1,
                5,
                5,
                2,
                3,
                4,
                4,
                3,
                4,
                "puli.jpg",
                "Pulis are small to medium-sized dogs with a distinctive corded coat. They were originally bred as herding dogs and are known for their agility and intelligence. Pulis require regular grooming to maintain their unique coat.");
        breedRepository.save(puli);

        Breed samoyed = new Breed("Samoyed",
                4,
                3,
                4,
                "Large",
                2,
                5,
                5,
                3,
                2,
                5,
                5,
                5,
                2,
                "samoyed.jpg",
                "Samoyeds are beautiful and friendly dogs with a thick double coat and a trademark smile. They were originally bred to work with reindeer herders and are known for their friendly and gentle nature. Samoyeds are often considered family-oriented and make great companions.");
        breedRepository.save(samoyed);

        Breed afghanHound = new Breed("Afghan Hound",
                3,
                4,
                4,
                "Large",
                1,
                5,
                5,
                2,
                2,
                4,
                3,
                2,
                4,
                "afghan_hound.jpg",
                "Afghan Hounds are elegant and noble dogs known for their long and silky coat. They have a regal appearance and a dignified nature. Afghan Hounds are independent and require regular grooming to maintain their beautiful coat.");
        breedRepository.save(afghanHound);

        Breed irishSetter = new Breed("Irish Setter",
                4,
                3,
                4,
                "Large",
                2,
                4,
                1,
                3,
                2,
                5,
                4,
                5,
                3,
                "irish_setter.jpg",
                "Irish Setters are energetic and friendly dogs known for their beautiful mahogany coat. They have a playful and outgoing nature, making them great companions and family pets. Irish Setters require regular exercise and mental stimulation.");
        breedRepository.save(irishSetter);

        Breed tibetanMastiff = new Breed("Tibetan Mastiff",
                3,
                4,
                3,
                "Giant",
                5,
                3,
                1,
                2,
                5,
                3,
                2,
                2,
                5,
                "tibetan_mastiff.jpg",
                "Tibetan Mastiffs are large and powerful dogs originating from Tibet. They have a protective and independent nature, making them excellent guard dogs. Tibetan Mastiffs are known for their thick double coat and impressive size.");
        breedRepository.save(tibetanMastiff);

        Breed keeshond = new Breed("Keeshond",
                3,
                3,
                3,
                "Medium",
                2,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                3,
                "keeshond.jpg",
                "Keeshonds are medium-sized dogs with a thick double coat and a plumed tail. They are friendly, intelligent, and make excellent family pets. Keeshonds are known for their ability to get along well with children and other animals.");
        breedRepository.save(keeshond);

        Breed pharaohHound = new Breed("Pharaoh Hound",
                4,
                4,
                5,
                "Medium",
                1,
                1,
                1,
                2,
                2,
                4,
                4,
                3,
                4,
                "pharaoh_hound.jpg",
                "Pharaoh Hounds are elegant and athletic dogs known for their keen hunting skills and their unique trait of blushing when excited. They have a short, glossy coat and a graceful build. Pharaoh Hounds are loyal, affectionate, and enjoy an active lifestyle.");
        breedRepository.save(pharaohHound);

        Breed saluki = new Breed("Saluki",
                3,
                3,
                4,
                "Large",
                1,
                3,
                3,
                2,
                2,
                4,
                4,
                3,
                4,
                "saluki.jpg",
                "Salukis are elegant and graceful dogs known for their incredible speed and endurance. They have a sleek coat and a slim build, making them excellent hunters and coursers. Salukis are independent yet loyal, and they thrive in an active and stimulating environment.");
        breedRepository.save(saluki);

        Breed chineseCrested = new Breed("Chinese Crested",
                3,
                4,
                3,
                "Small",
                1,
                5,
                5,
                2,
                2,
                5,
                4,
                4,
                3,
                "chinese_crested.jpg",
                "Chinese Cresteds are unique and hairless dogs that come in two varieties: hairless and powder puff. They are known for their affectionate and lively nature. Chinese Cresteds are often sought after by individuals with allergies due to their hypoallergenic coat.");
        breedRepository.save(chineseCrested);


        Breed xoloitzcuintli = new Breed("Xoloitzcuintli",
                3,
                4,
                3,
                "Medium",
                1,
                2,
                5,
                2,
                2,
                4,
                4,
                3,
                4,
                "xoloitzcuintli.jpg",
                "Xoloitzcuintlis, also known as Mexican Hairless Dogs, are ancient and rare breeds known for their unique appearance and their affectionate nature. They come in three sizes: toy, miniature, and standard. Xoloitzcuintlis are considered sacred dogs with a rich cultural history.");
        breedRepository.save(xoloitzcuintli);

        Breed briard = new Breed("Briard",
                4,
                4,
                4,
                "Large",
                2,
                4,
                3,
                2,
                4,
                4,
                3,
                3,
                3,
                "briard.jpg",
                "Briards are intelligent and protective dogs with a distinctive long and shaggy coat. They have a strong herding instinct and are known for their loyalty and devotion to their families. Briards require regular grooming to maintain their coat.");
        breedRepository.save(briard);

        Breed azawakh = new Breed("Azawakh",
                3,
                3,
                5,
                "Large",
                1,
                2,
                3,
                2,
                2,
                3,
                3,
                2,
                5,
                "azawakh.jpg",
                "Azawakhs are elegant and agile dogs originating from West Africa. They have a slim and athletic build, built for speed and endurance. Azawakhs are known for their independence and their ability to form a strong bond with their families.");
        breedRepository.save(azawakh);

        Breed bergamasco = new Breed("Bergamasco",
                3,
                3,
                3,
                "Large",
                1,
                5,
                3,
                2,
                3,
                4,
                4,
                4,
                3,
                "bergamasco.jpg",
                "Bergamascos are unique and hardworking dogs known for their distinctive coat made up of mats and cords. They have a strong herding instinct and a calm and steady temperament. Bergamascos require dedicated grooming to maintain their unique coat.");
        breedRepository.save(bergamasco);

        Breed catahoulaLeopardDog = new Breed("Catahoula Leopard Dog",
                4,
                3,
                4,
                "Large",
                2,
                2,
                1,
                3,
                4,
                3,
                3,
                3,
                4,
                "catahoula_leopard_dog.jpg",
                "Catahoula Leopard Dogs are versatile and energetic dogs with a striking coat pattern. They are known for their intelligence, agility, and their natural herding and hunting abilities. Catahoula Leopard Dogs are loyal and protective of their families.");
        breedRepository.save(catahoulaLeopardDog);

        Breed thaiRidgeback = new Breed("Thai Ridgeback",
                3,
                3,
                4,
                "Large",
                1,
                2,
                1,
                3,
                4,
                3,
                2,
                2,
                5,
                "thai_ridgeback.jpg",
                "Thai Ridgebacks are ancient and rare dogs known for the ridge of hair that runs in the opposite direction along their back. They are intelligent, athletic, and have a strong prey drive. Thai Ridgebacks are loyal and protective of their families.");
        breedRepository.save(thaiRidgeback);

        Breed bouvierDesFlandres = new Breed("Bouvier des Flandres",
                4,
                3,
                4,
                "Large",
                2,
                4,
                2,
                2,
                5,
                4,
                4,
                4,
                3,
                "bouvier_des_flandres.jpg",
                "Bouvier des Flandres is a strong and versatile breed originally developed for herding and driving cattle. They have a thick, weather-resistant double coat and a robust build. Bouviers are intelligent, protective, and make excellent working dogs or family companions.");
        breedRepository.save(bouvierDesFlandres);

        Breed kerryBlueTerrier = new Breed("Kerry Blue Terrier",
                4,
                4,
                4,
                "Medium",
                1,
                5,
                5,
                3,
                3,
                3,
                3,
                3,
                3,
                "kerry_blue_terrier.jpg",
                "Kerry Blue Terriers are intelligent and spirited dogs with a unique soft, wavy coat that ranges in shades of blue-gray. They are versatile and were originally bred as working dogs for various tasks, including herding and hunting. Kerry Blues are loyal and make great companions.");
        breedRepository.save(kerryBlueTerrier);

        Breed portugueseWaterDog = new Breed("Portuguese Water Dog",
                4,
                3,
                4,
                "Medium",
                1,
                4,
                5,
                3,
                3,
                5,
                4,
                4,
                2,
                "portuguese_water_dog.jpg",
                "Portuguese Water Dogs are energetic and intelligent dogs known for their webbed feet and love for water. They were originally bred as working dogs for fishermen, assisting with tasks such as herding fish and retrieving lost items. Portuguese Water Dogs are loyal and make great family pets.");
        breedRepository.save(portugueseWaterDog);

        Breed chowChow = new Breed("Chow Chow",
                2,
                4,
                3,
                "Medium",
                4,
                5,
                3,
                2,
                4,
                2,
                2,
                2,
                5,
                "chow_chow.jpg",
                "Chow Chows are sturdy and dignified dogs known for their distinctive appearance with a lion-like mane and a blue-black tongue. They are independent and have a strong protective instinct. Chow Chows require consistent socialization and training from an early age.");
        breedRepository.save(chowChow);

        Breed belgianMalinois = new Breed("Belgian Malinois",
                5,
                3,
                5,
                "Large",
                2,
                2,
                1,
                4,
                5,
                3,
                3,
                3,
                4,
                "belgian_malinois.jpg",
                "Belgian Malinois is a highly intelligent and driven breed that excels in various tasks, including police and military work, search and rescue, and competitive dog sports. They are agile, loyal, and require a lot of mental and physical stimulation.");
        breedRepository.save(belgianMalinois);

        Breed cotonDeTulear = new Breed("Coton de Tulear",
                3,
                3,
                3,
                "Small",
                1,
                4,
                5,
                3,
                2,
                5,
                5,
                4,
                2,
                "coton_de_tulear.jpg",
                "Coton de Tulear is a charming and affectionate breed with a fluffy white coat. They are known for their friendly and sociable nature, making them great companions and therapy dogs. Coton de Tulears thrive on human companionship and enjoy being part of a family.");
        breedRepository.save(cotonDeTulear);

        Breed borzoi = new Breed("Borzoi",
                3,
                3,
                4,
                "Giant",
                2,
                3,
                3,
                2,
                3,
                4,
                4,
                3,
                4,
                "borzoi.jpg",
                "Borzois, also known as Russian Wolfhounds, are elegant and graceful sighthounds. They have a long, silky coat and were originally bred for hunting wolves and other game. Borzois are gentle, independent, and have a calm and reserved nature.");
        breedRepository.save(borzoi);

        Breed canaanDog = new Breed("Canaan Dog",
                3,
                3,
                4,
                "Medium",
                1,
                2,
                2,
                4,
                4,
                3,
                3,
                3,
                5,
                "canaan_dog.jpg",
                "Canaan Dogs are ancient and versatile herding dogs originally from the Middle East. They have a well-balanced and medium-sized build with a dense, weather-resistant coat. Canaan Dogs are intelligent, loyal, and have a strong protective instinct.");
        breedRepository.save(canaanDog);

        Breed dandieDinmontTerrier = new Breed("Dandie Dinmont Terrier",
                3,
                4,
                3,
                "Small",
                1,
                4,
                5,
                2,
                2,
                3,
                3,
                4,
                4,
                "dandie_dinmont_terrier.jpg",
                "Dandie Dinmont Terriers are small and distinctive terriers with a unique topknot of hair on their heads and a long, low body. They are intelligent, independent, and have a courageous nature. Dandie Dinmont Terriers make loyal and loving companions.");
        breedRepository.save(dandieDinmontTerrier);

        Breed cirnecoDellEtna = new Breed("Cirneco dell Etna",
                3,
                3,
                4,
                "Medium",
                1,
                2,
                4,
                2,
                3,
                4,
                4,
                3,
                4,
                "cirneco_dell_etna.jpg",
                "The Cirneco dell'Etna is a small to medium-sized breed originating from Italy. It is a skilled hunter with a slender build and a short, glossy coat. Cirneco dell'Etnas are known for their athleticism, agility, and keen sense of smell.");
        breedRepository.save(cirnecoDellEtna);

        Breed finnishLapphund = new Breed("Finnish Lapphund",
                3,
                3,
                4,
                "Medium",
                2,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                3,
                "finnish_lapphund.jpg",
                "The Finnish Lapphund is a medium-sized herding dog originating from Finland. With a thick double coat and bushy tail, they are well-suited for cold climates. Finnish Lapphunds are friendly, intelligent, and have a strong herding instinct.");
        breedRepository.save(finnishLapphund);

        Breed portuguesePodengo = new Breed("Portuguese Podengo",
                3,
                3,
                4,
                "Medium",
                1,
                1,
                4,
                4,
                2,
                3,
                3,
                3,
                4,
                "portuguese_podengo.jpg",
                "The Portuguese Podengo is an ancient sighthound breed from Portugal. It comes in three sizes (small, medium, and large) and has a short, smooth coat. Portuguese Podengos are intelligent, agile, and have a strong prey drive.");
        breedRepository.save(portuguesePodengo);

        Breed bolognese = new Breed("Bolognese",
                3,
                3,
                3,
                "Small",
                1,
                5,
                5,
                2,
                2,
                5,
                4,
                4,
                2,
                "bolognese.jpg",
                "The Bolognese is a small breed originating from Italy. It has a distinctive white coat that is fluffy and curly. Bolognese dogs are known for their affectionate and gentle nature, making them wonderful companions and therapy dogs.");
        breedRepository.save(bolognese);

        Breed chinook = new Breed("Chinook",
                4,
                3,
                4,
                "Large",
                2,
                2,
                1,
                2,
                3,
                4,
                4,
                4,
                3,
                "chinook.jpg",
                "The Chinook is a rare and versatile breed developed in the United States. It is known for its strength, endurance, and friendly nature. Chinooks excel in various activities such as sledding, agility, and therapy work.");
        breedRepository.save(chinook);

        Breed spanishWaterDog = new Breed("Spanish Water Dog",
                4,
                3,
                4,
                "Medium",
                1,
                4,
                5,
                3,
                3,
                4,
                4,
                4,
                3,
                "spanish_water_dog.jpg",
                "The Spanish Water Dog is a versatile and intelligent breed originating from Spain. It has a curly, hypoallergenic coat that requires regular grooming. Spanish Water Dogs are known for their agility, trainability, and their ability to work both on land and in water.");
        breedRepository.save(spanishWaterDog);

        Breed blackRussianTerrier = new Breed("Black Russian Terrier",
                4,
                4,
                4,
                "Giant",
                2,
                5,
                4,
                3,
                5,
                3,
                3,
                3,
                4,
                "black_russian_terrier.jpg",
                "The Black Russian Terrier, also known as the BRT, is a large and powerful breed developed in Russia. It has a thick, black, and weather-resistant coat. Black Russian Terriers are confident, protective, and make excellent guard dogs and loyal companions.");
        breedRepository.save(blackRussianTerrier);

        Breed kuvasz = new Breed("Kuvasz",
                3,
                4,
                4,
                "Giant",
                3,
                3,
                2,
                3,
                5,
                3,
                3,
                3,
                4,
                "kuvasz.jpg",
                "The Kuvasz is a large and powerful breed originating from Hungary. It has a dense, double coat that provides excellent protection from the elements. Kuvasz dogs are loyal, protective, and make exceptional guardians for their families.");
        breedRepository.save(kuvasz);

        Breed labradorRetriever = new Breed("Labrador Retriever",
                5,
                3,
                5,
                "Large",
                2,
                2,
                1,
                2,
                3,
                5,
                5,
                5,
                2,
                "labrador_retriever.jpg",
                "Labrador Retrievers are highly trainable and friendly dogs. They require regular exercise and are excellent with children. They are one of the most popular dog breeds in the world.");
        breedRepository.save(labradorRetriever);

        Breed germanShepherd = new Breed("German Shepherd",
                5,
                4,
                5,
                "Large",
                1,
                3,
                1,
                3,
                5,
                4,
                3,
                4,
                2,
                "german_shepherd.jpg",
                "German Shepherds are intelligent and highly trainable dogs. They are commonly used as working dogs in roles such as police, search and rescue, and military. They are loyal and protective companions.");
        breedRepository.save(germanShepherd);

        Breed goldenRetriever = new Breed("Golden Retriever",
                4,
                3,
                4,
                "Large",
                2,
                3,
                2,
                2,
                3,
                5,
                4,
                5,
                2,
                "golden_retriever.jpg",
                "Golden Retrievers are friendly and intelligent dogs. They are known for their beautiful golden coats and their gentle nature. They are great family pets and are often used as therapy dogs.");
        breedRepository.save(goldenRetriever);

        Breed bulldog = new Breed("Bulldog",
                2,
                4,
                2,
                "Medium",
                5,
                2,
                2,
                2,
                2,
                4,
                3,
                4,
                2,
                "bulldog.jpg",
                "Bulldogs are known for their distinctive wrinkled face and muscular build. Despite their tough appearance, they are generally gentle and affectionate companions. They are not very active and are prone to certain health issues.");
        breedRepository.save(bulldog);

        Breed siberianHusky = new Breed("Siberian Husky",
                3,
                3,
                5,
                "Large",
                2,
                3,
                2,
                4,
                2,
                4,
                4,
                4,
                3,
                "siberian_husky.jpg",
                "Siberian Huskies are active and energetic dogs that were originally bred for sled pulling in the Arctic. They have striking blue or multi-colored eyes and a thick double coat. Huskies are known for their friendly and outgoing nature.");
        breedRepository.save(siberianHusky);

        Breed beagle = new Breed("Beagle",
                3,
                3,
                4,
                "Medium",
                2,
                2,
                1,
                5,
                2,
                5,
                4,
                4,
                3,
                "beagle.jpg",
                "Beagles are friendly and energetic dogs known for their keen sense of smell. They were originally bred as scent hounds for tracking small game. Beagles are often sociable and get along well with other dogs and children.");
        breedRepository.save(beagle);

        Breed dachshund = new Breed("Dachshund",
                3,
                4,
                3,
                "Small",
                1,
                2,
                1,
                4,
                2,
                4,
                3,
                3,
                2,
                "dachshund.jpg",
                "Dachshunds, also known as Wiener Dogs, are small dogs with long bodies and short legs. They were originally bred for hunting small game. Dachshunds are loyal and affectionate companions, but they can be stubborn at times.");
        breedRepository.save(dachshund);

        Breed rottweiler = new Breed("Rottweiler",
                4,
                4,
                4,
                "Large",
                3,
                2,
                1,
                3,
                5,
                3,
                3,
                3,
                3,
                "rottweiler.jpg",
                "Rottweilers are strong and powerful dogs known for their protective nature. They require consistent training and socialization from an early age. Rottweilers are loyal and make excellent guard dogs.");
        breedRepository.save(rottweiler);

        Breed shihTzu = new Breed("Shih Tzu",
                3,
                4,
                2,
                "Small",
                1,
                5,
                5,
                3,
                2,
                5,
                4,
                4,
                2,
                "shih_tzu.jpg",
                "Shih Tzus are small and affectionate dogs with a distinctive long, flowing coat. They are known for their friendly and outgoing nature. Shih Tzus make great companions and thrive in a loving and caring environment.");
        breedRepository.save(shihTzu);

        Breed borderCollie = new Breed("Border Collie",
                5,
                3,
                5,
                "Medium",
                2,
                3,
                1,
                3,
                3,
                4,
                4,
                3,
                2,
                "border_collie.jpg",
                "Border Collies are highly intelligent and energetic dogs, often considered one of the most trainable breeds. They excel in various dog sports and are commonly used as working dogs. Border Collies require mental and physical stimulation.");
        breedRepository.save(borderCollie);

        Breed corgi = new Breed("Corgi",
                4,
                3,
                3,
                "Medium",
                1,
                3,
                1,
                3,
                2,
                4,
                4,
                4,
                2,
                "corgi.jpg",
                "Corgis, including both Pembroke Welsh Corgis and Cardigan Welsh Corgis, are small herding dogs with a big personality. They are known for their short legs and long bodies. Corgis are intelligent, alert, and make great family pets.");
        breedRepository.save(corgi);

        Breed australianShepherd = new Breed("Australian Shepherd",
                4,
                3,
                5,
                "Medium",
                2,
                3,
                1,
                3,
                3,
                4,
                4,
                4,
                3,
                "australian_shepherd.jpg",
                "Australian Shepherds, also known as Aussies, are intelligent and active dogs with a strong herding instinct. They are known for their striking coat colors and patterns. Aussies are loyal companions and excel in various dog sports.");
        breedRepository.save(australianShepherd);

        Breed pug = new Breed("Pug",
                3,
                4,
                2,
                "Small",
                5,
                2,
                1,
                2,
                2,
                5,
                3,
                4,
                2,
                "pug.jpg",
                "Pugs are small dogs with a distinctive wrinkled face and a curly tail. They are known for their charming and sociable nature. Pugs are excellent companions and adapt well to various living situations.");
        breedRepository.save(pug);

        Breed dobermanPinscher = new Breed("Doberman Pinscher",
                4,
                4,
                4,
                "Large",
                1,
                2,
                1,
                4,
                5,
                3,
                3,
                3,
                4,
                "doberman_pinscher.jpg",
                "Doberman Pinschers are powerful and intelligent dogs known for their loyalty and protective nature. They are often used as guard dogs and excel in various dog sports. Dobermans require firm training and socialization from an early age.");
        breedRepository.save(dobermanPinscher);

        Breed cavalierKingCharlesSpaniel = new Breed("Cavalier King Charles Spaniel",
                4,
                4,
                3,
                "Small",
                1,
                3,
                1,
                2,
                1,
                5,
                5,
                5,
                2,
                "cavalier_king_charles_spaniel.jpg",
                "Cavalier King Charles Spaniels are small and affectionate dogs with a friendly and gentle nature. They are well-suited for families and get along well with children and other pets. Cavaliers have a silky coat that requires regular grooming.");
        breedRepository.save(cavalierKingCharlesSpaniel);

        Breed toyPoodle = new Breed("Toy Poodle",
                5,
                2,
                3,
                "Small",
                1,
                5,
                5,
                3,
                2,
                5,
                4,
                4,
                2,
                "toy_poodle.jpg",
                "Toy Poodles are small and intelligent dogs known for their elegant appearance and curly, dense coat. They are highly trainable and excel in various dog sports and activities. Toy Poodles are sociable and make wonderful companions for individuals and families.");
        breedRepository.save(toyPoodle);

        Breed standardPoodle = new Breed("Standard Poodle",
                5,
                3,
                4,
                "Large",
                1,
                5,
                5,
                2,
                3,
                5,
                5,
                5,
                2,
                "standard_poodle.jpg",
                "Standard Poodles are elegant and versatile dogs known for their intelligence and athleticism. They have a curly, non-shedding coat and a well-proportioned body. Standard Poodles are highly trainable and excel in various activities, including obedience, agility, and retrieving.");
        breedRepository.save(standardPoodle);

        Breed miniaturePoodle = new Breed("Miniature Poodle",
                5,
                3,
                4,
                "Medium",
                1,
                5,
                5,
                2,
                3,
                5,
                5,
                5,
                2,
                "miniature_poodle.jpg",
                "Miniature Poodles are lively and intelligent dogs known for their compact size and curly, dense coat. They are highly trainable and excel in various dog sports and activities. Miniature Poodles are sociable and make wonderful companions for individuals and families.");
        breedRepository.save(miniaturePoodle);

        Breed borderTerrier = new Breed("Border Terrier",
                4,
                4,
                4,
                "Small",
                1,
                4,
                4,
                3,
                2,
                5,
                5,
                5,
                2,
                "border_terrier.jpg",
                "Border Terriers are small, feisty dogs with a reputation for being fearless. They are highly intelligent and easy to train, and they make great companions for active families. Border Terriers are also known for their friendly and playful nature, and they get along well with children and other dogs.");
        breedRepository.save(borderTerrier);

        Breed cockapoo = new Breed("Cockapoo",
                4,
                4,
                3,
                "Medium",
                1,
                3,
                1,
                2,
                2,
                5,
                5,
                5,
                2,
                "cockapoo.jpg",
                "Cockapoos are a cross between a Cocker Spaniel and a Poodle, and they inherit the best qualities of both breeds. They are intelligent, friendly, and playful dogs that make great family pets. Cockapoos are also relatively low-maintenance dogs, and they do not require a lot of grooming. ");
        breedRepository.save(cockapoo);

        Breed cockerSpaniel = new Breed("Cocker Spaniel",
                4,
                4,
                4,
                "Medium",
                1,
                4,
                3,
                2,
                2,
                5,
                5,
                5,
                2,
                "cocker_spaniel.jpg",
                "Cocker Spaniels are friendly, outgoing dogs that make great family pets. They are intelligent and eager to please their owners, and they are relatively easy to train. Cocker Spaniels are also very social dogs and enjoy being around people and other animals.");
        breedRepository.save(cockerSpaniel);

        Breed springerSpaniel = new Breed("Springer Spaniel",
                4,
                4,
                4,
                "Medium",
                1,
                4,
                4,
                2,
                2,
                5,
                5,
                5,
                2,
                "springer_spaniel.jpg",
                "Springer Spaniels are friendly, outgoing dogs that make great family pets. They are intelligent and eager to please their owners, and they are relatively easy to train. Springer Spaniels are also very social dogs and enjoy being around people and other animals.");
        breedRepository.save(springerSpaniel);

    }
}

