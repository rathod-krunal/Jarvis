# What Is 'NPM' ?
  
  => NPM Is Package Manager
  => If You Have A Comman Task Or A Comman Feature To Made Than You Can Use NPM There Are Milions Of Developers Are There, They Have Already Made That Feature And Put It In A Module And Pushed That Module To The Reposetry To Use That Module For Free For Everyone.
  => You Can Also Make a Module And Push It To The Reposetry.

# What Is 'Parcel/Webpack'? Why Do We Need It?

  => Parcel Is A Fast And Zero Configuration Front-End Buid Tool.
  => Parcel Gives Us Many Tools Like Hot Loading Good Error Messages On Screen And Gives Ecxect Point Where Is Error Is Made.
  => Parcel Also Gives As A Buid Feature That Optimizes Our App For Production By Tree-Shaking And Minifying Our Code Autometically.

# What Is '.Pacel-cache'
  
  => Parcel Caches Everything And Tracks All Of The File, Configuration,Dependencies If You Restart You Server Parcel Do Not Buildm Everything From Start Its Only Checks What Changes Are Made Since Last Time You Run A Server And Compare Everything And Gives Us A End Product. Parcel Is Fast Because It's Caches Everything.

# What Is 'NPX'?

  => NPX Stands For Node Package Execute.
  => NPX Is A Package Runner.
  => NPX Allows Us To Run Any Packages That Available On NPM Without Even Installing It.
  => With NPX We Can Make Our Code Light-Wighted Since It Does Not Install Every Package That We Use.
  => NPX Help Us When We Need To Use A Single Package Just For Once,In That Case Installing And Managing It's Become Bundle That's Why We Use NPX. 

# What Is Difference Between 'dependencies' VS 'devDependencies'

  => Dependencies and devDependencies Are Plain Json Objects In Package.json Both Containes The Name And Version Of The Modules That Our Code Is Dependent
  => Devdependencie Contains Names And Versions Of The Modules Which Are Required Only For Devlopment
  => Dependencie Contains Name And Version Of The Node Modules Wich Are Required At Runtime.

# What Is Tree Shaking ?

  => Tree Shaking Is Term Called For Removing Dead OR Unused Code.
  => When We Bundling Our Code There Will Be A Dead Or Unused Code That Make Our Applications File Size Big,That's When Tree Shaking Comes Tree Shaking Do Not Include This Unused Code In Our Bundle Files.

# What Is Hot Module Replacement?

  => Hot Module Replacement Is When Ever You Write Code To See The Output You Need To Refresh The Page Everytime You Change The Code You Need To Refresh The Page
  => To Solve This Problem HMR Comes Hot Module Replacement Is Basically When You First Time Build The Application Webpack Generates A Manifest File The Manifest Contains A Compilation HASH And A List Of All Modules.
  => Everytime You Change The File The Change Is Detected By A WebPack.
  => The WebPack Compiler Will Build Your Application With The Changes Creating A New Manifest File And Comparing It With The Old One And Updates In UI Only Tag Or Components You Change.

# List Down Your Favourite 5 Super Power Of Parcel And Describe Any 3 Of Them In Your Own Words.

  => Hot Reloading
  => Caching
  => Tree Shaking
  => Production Build
  => Auto Install

     #> Hot Reloading => In Hot Reloading As You Make Change In Your Code Parcel Autometically Rebuild The Changed File And Updates Your App.
     #> By Default Parcel Fully Reload's The Page But Some Tume It Performs The Hot Module Replacement.

     #> Caching => Parcel Caches Everything That We Build In Our Code If You Restart Your Server Parcel Will Only Rebuild Files That Have Changed Since Last Time It Ran The Server.

     #> Tree Shaking => While Building Our Code For Production Tree Shaking Removes Dead Or Unused Code From Our Build Files Making Our Build File Size Minimum.
  
# What Is '.gitignore'? What Should We Add And Not Add Into It?
  
  => GitIgnore Is File Where We Save Our File That We Dont Push To The Git.
  => We Should Add Files Like Node_Modules Or Files Like Reinstallabel That Can We Install Via Package.log.
  => We Should Not Add Files That Containes Our Code That Need Running Like Js Files CSS Files HTML Files ETC.

# WHat Is Difference Between 'Package.json' And 'Package-lock.json'

  => Package.json Is Configuration Json Object Of NPM.
  => It Contains Inforamatoin About Our Projects Such As Name Version Aurthor ETC.
  => It Contains Dependencies With Thair Versions Number So These Dependencies Autometically Installed Or Updates While Our Project Is Set Up.
  => Package-lock.json File Contains Ecxact Version Of Every Installed Dependencies.
  => Since It Keeps Track Of Ecxact Version Of Dependencies It Help Us When We Are Working In A Team It Keeps Everyone On Same Version.

# Why Should I Not Modify 'Package-lock.json'?

  => Package-lock.json File Provides Environment Where All The Team Members Can Work On Same Version Of Dependencies,Modifying It Will Lead You To An Error.
  => Since Package-lock.json File Keeps The Details Of Our Applications Packages Version By Changing It It Will Might Intruduce To Version Conflic.

# What Is '.node_modules' ? Is It Good Idea To Push That On Git?

  => .node_modules Folder Is Created When We Install Any Dependencies For Our Application.
  => .node_modeul Contains Every Packages,Library That Our Project Is Depend On.
  => Everytime We Install Any Dependencies In Our Project It Goes In To Node_Moduels And Every Dependencies Have There Own Dependencies Because Of That Our Node Moduel Folder's File Size Increase.
  => We Can Reinstall Node_Module Folder Simply By Typing NPM Install With Help Of Packgelog.json File We Can Dowanload Our Node_Module File
  => That's Why It Is Not Recomedent To Push It To The Git.

# What Is The '.Dist' Folder?

  => .Dist Folder Is Output Directory Where Your React Code Is Compiled,Bundled,And Optimized For Production.
  => Dist Folder Bundles And Minifies Our CODE During Build Process.
  => It Optimize Our Code 

# What Is Browserlist' ?
 
  => Browser List Makes Our App Compatiable For Older Version Of Browsers.
  => We Have To Configure Our Packagelog.json File Tell Our Code To Which Browsers It Should Support.
  => We Have To Give Array Of List In Packaglog.json File In Wich Browser Our Application Is Compatiable.