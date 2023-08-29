
# Is JSX Mandatory For React ? 
 
  => JSX Is Not Mandatory For React We Can Write Code In React Without JSX, With React Elements But With That The Code Becomes Lengthy And Readabilty Decrees And It's Hard To Maintain Code.

# Is ES6 Mandatory For React ?

  => ES6 Is Not Mandatory For React But Most Of The Developers Use It Because Of Syntext And Feature's That ES6 Provides.

# {TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} In JSX

  => {TitleComponent} : This Assumes {TitleComponent} Is A Variable That Returns JSX Elements OR it's JavaScript Expression
  => {< TitleComponent/>} : This Value Represent A Component That Is Returning Some JSX Or A Function That Return JSX.
  => {< TitleComponent> < TitleComponent/>} : This Are Equivalent Only When {< TitleComponent/>} Has No Childer's Component's The Opening And Closing Tags Are Created To Include Childe Components.

# How Can I Write Comments In JSX?
 
  => We Can Write Comments In JSX Normally Like We Use To Do In JavaScript But In React We Need To Enclose It With CurlyBraces.

# What Is <React.Fragment> </React.Fragment> And <></> ?

  => React.Fragment Is Build In React Feature That's Provides A Way To Group Multiple Element's Without Adding Extra Dom Node To Rendered Output.
  => When We Render Multiple Elements We Need To Wrap It Into Single Parent Element
  => In Some Time We Don't Want To Add Extra Node Into Our Dom That's Why We Use React.Fregment

  => <></> : This Is Same As Fregment It Help Us To Group Elements Into Single Parent Element Without Adding Extra Node.

# What Is Virtual Dom?

  => Virtual Dom Is Representation Of Actual Dom In Memory.
  => Manipulation The Real Dom Directly Can Be Slow And Resource Intensive . When Change Is Made To The UI The Browser Has To Update The Dom Wich Can Involve Reflow And Repaint Operations These Operation Can Be Costly In Term Of Performance
  => In React Changes To The UI Are First Applied To A Virtual Dom Reprasentetion In Memory This Representetion Is A Lightweight Copy Of The Actual Dom Structure.
  => The Virtual Dom Essentially Act As Intermediary Layer That Optimizes The Process Of Updating The UI By Reducing The Direct Interaction Withi The Real Dom.This Result's In Faster Rendering And Better Performance For Web Applications.

# What Is Reconciliation In React ?

  => Reconciliation Is A Process To Eficiently Update The UI In Response To Changes In The Apps State Or Prop's
  => When Components Props Or Satate Changes React Generates A New Virtual Dom And This New Updated Dom Compared To Previews Virtual Dom Than Checks For The Difference Bitween Them And Only Makes Change's Where We Have Make A Change In Whole App.

# What Is React Fiber?
 
  => React Fiber Is An Evolution Of The React Reconciliation Algorithm That Focouses On Improving Rendering Performance,Responsiveness And The Overall User Experience  Of The React Application By Enabling Incremental Rendaring,Better Scheduling,And Improved Error Handlling.

# Why We Need Key's In React? When Do We Need Keys In React ?

  => In React Key Props Is Used To Help React Identify And Track Individual Components In List Of Elements.
  => It's Important For Efficient Updates And Proper Rendring Of Component's Especially When They Are Dynamically Generated Within A Loop Or Map.
  => Key Props Are Needed When We Are Lopping Or Maping Over An Array.

# Can I Use Index As Keys In React?

  => Yes We Can Use Index As Key In React.
  => But When We Use Index As A Key It Becomes Ineficient It Might Leed To An Error When The Order OF Index Changes.

# What Is Props In React?
 
  => Props Stands For Properties.
  => Props Help Us To Pass The Data To One Components To Another.
  => Props PassDown Data From Parent Component To Child Component.

# What Is Config Driven UI ?

 => Config Driven Ui` Are Based On The Configurations Of The Data Application Receives. It Is Rather A Good Practice To Use Config Driven Uis To Make Application For Dynamic. 
 => It Is A Very Common & Basic Approach To Interact With The User. It Provides A Generic Interface To Develop Things Which Help Your Project Scale Well. It Saves A Lot Of Development Time And Effort.
 => A Typical Login Form, Common In Most Of The Apps. Most Of These Forms Also Get Frequent Updates As The Requirements Increase In Terms Of Form Validations, Dropdown Options,.. Or Design Changes.