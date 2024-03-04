
import SkillCategoryList from '@/components/myskills/skill-category-list';
import CharacterProfileDropdown from '@/components/profilecard';

export default function About(){
    return(
        <>
        <div className='text-center'>

<h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636]
             to-[#FFFFFF] bg-[200%_auto] text-6xl text-center text-transparent
              font-extrabold bg-clip-text">About Me</h1>
              </div>
         <div className='flex justify-center'>
        
       
        <CharacterProfileDropdown/>
        </div>
        <div>
        <SkillCategoryList />
        </div>
        </>
    );
}