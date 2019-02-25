---
template: article
title: Controlled forms with React
date: 2018-04-17T15:47:40.582Z
media_image: /img/controlled_forms.jpg
ingress: >-
  The first month of freelancing isn’t really over yet, but I’m long overdue for a blog post anyway. I never promised that these would be regular!
tags:
  - dev
  - react
  - javascript
pinned: 0
---

**26.5.2018: I updated this blog post with a solution compatible with React 16.4.**

We all know about “controlled components”, right? The wonderful invention that almost effortlessly keeps our form inputs in sync with our state. It should come as no surprise that the “controlled component” idea extends to whole forms too and covers them quite nicely.

In this blog post I want to show you how I do forms in React. Be warned, I am not going to show you anything revolutionary. Quite the opposite in fact, as I like to keep things simple.

### The starting point

So you got yourself some data that you want to make available for the user to modify, for one reason or another. Don’t worry, I’m not gonna ask questions! The data comes from an API, over GraphQL for example, and is saved in the main state of your app. This app of yours has a few pages, and here is the page you affectionately call the “user profile page”:

```javascript
class UserProfilePage extends Component {
  
  state = {
    favoriteGermanElectronicaTrack: '',
    firstMemeSeen: '',
    pagerNumber: '',
    active: false
  }
  
  onChange = field => e => {
    this.setState({
      [ field ]: e.target.value
    })
  }
  
  toggleEdit = (active = !this.state.active) => {
    this.setState({ active: active })
  }
  
  render() {
    const { user } = this.props
    const {
      active,
      favoriteGermanElectronicaTrack,
      firstMemeSeen,
      pagerNumber
    } = this.state
    
    return (
      <div>
        <h2>
          User profile
        </h2>
        <Mutation mutation={ setUserProfileData }>
          { (mutate) => (
            <form onSubmit={ mutate }>
              <div className="input-group">
                <label>
                  Favorite German Electronica track
                </label>
                <input
                  disabled={ !active }
                  name="favoriteGermanElectronicaTrack"
                  value={ favoriteGermanElectronicaTrack || user.favoriteGermanElectronicaTrack }
                  onChange={ this.onChange('favoriteGermanElectronicaTrack') } />
              </div>
              <div className="input-group">
                <label>
                  First meme you ever saw
                </label>
                <input
                  disabled={ !active }
                  name="firstMemeSeen"
                  value={ firstMemeSeen || user.firstMemeSeen }
                  onChange={ this.onChange('firstMemeSeen') } />
              </div>
              <div className="input-group">
                <label>
                  Pager number, in case of emergencies
                </label>
                <input
                  disabled={ !active }
                  name="pagerNumber"
                  value={ pagerNumber || user.pagerNumber }
                  onChange={ this.onChange('pagerNumber') } />
              </div>
              { active ? (
                <div className="buttons">
                  <button type"submit">
                    Submit
                  </button>
                  <button type="button" onClick={ () => this.toggleEdit(false) }>
                    Cancel
                  </button>
                </div>
              ) : (
                <button type="button" onClick={ () => this.toggleEdit(true) }>
                  Edit
                </button>
              ) }
            </form>
          ) }
        </Mutation>
      </div>
    )
  }
}
```

A pretty standard user profile page, right? We have the user object that comes from the API or your state, and we make fields for each property so that it can be edited. The form can be toggled between “active” and “inactive” state, so it doubles as a profile page where the user can peruse all the personal data you tricked them into handing over to you (how’s your GDPR compliance?).

Too bad it sucks. It’s horrible! Presumably, since it’s a page, it’s a top-level route component and it might have to deal with lots of other stuff, that I’ve left off for brevity. It also contains the form AND the mutation! So right off the bat we can see that it does too much.

And what do we do when a component does too much?

*Katana swish*

### Improvement by katana

That’s right, we split it up! Here’s the new page:

```javascript
class UserProfilePage extends Component {
  
  state = {
    active: false
  }
  
  toggleActive = (active = !this.state.active) => {
    this.setState({ active: active })
  }
  
  render() {
    const { user } = this.props
    const { active } = this.state
    
    return (
      <div>
        <h2>
          User profile
        </h2>
        <UserProfileForm
          user={user}
          onActivate={ () => this.toggleActive(true) }
          onCancel={ () => this.toggleActive(false) }
          active={active}/>
      </div>
    )
  }
}
```

Much better. I moved everything associated with the form to a separate UserProfileForm component, only keeping the activation state in the page. Here’s the form:

```javascript
@mutation(setUserProfileData)
class UserProfileForm extends Component {
  
  state = {
    favoriteGermanElectronicaTrack: this.props.user.favoriteGermanElectronicaTrack,
    firstMemeSeen: this.props.user.firstMemeSeen,
    pagerNumber: this.props.user.pagerNumber
  }
  
  onChange = field => e => {
    this.setState({
      [ field ]: e.target.value
    })
  }
  
  onSubmit = e => {
    e.preventDefault()
    this.props.mutate({ variables: this.state })
  }
  
  render() {
    const { active, onActivate, onCancel } = this.props
    const {
      favoriteGermanElectronicaTrack,
      firstMemeSeen,
      pagerNumber
    } = this.state
    
    return (
      <form onSubmit={ this.onSubmit }>
        <Input
          disabled={!active}
          label="Favorite German Electronica track"
          name="favoriteGermanElectronicaTrack"
          value={ favoriteGermanElectronicaTrack }
          onChange={ this.onChange('favoriteGermanElectronicaTrack') } />
        <Input
          disabled={!active}
          label="First meme you ever saw"
          name="firstMemeSeen"
          value={ firstMemeSeen }
          onChange={ this.onChange('firstMemeSeen') } />
        <Input
          disabled={!active}
          label="Pager number, in case of emergencies"
          name="pagerNumber"
          value={ pagerNumber }
          onChange={ this.onChange('pagerNumber') } />
        { active ? (
          <div className="buttons">
            <button type"submit">
              Submit
            </button>
            <button type="button" onClick={ onCancel }>
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" onClick={ onActivate }>
            Edit
          </button>
        ) }
      </form>
    )
  }
}
```

Nice! I cleaned it up a bit, mainly by abstracting the mutation into a decorator and creating reusable Input components, as I like to do for most forms I make nowadays. Here we also see the first glimpse of the “controlled form” I talked about at the beginning, in the form of the active prop.

Most importantly I put the values from the user prop to work in providing the initial state of the form. The provided values should be the initial values and the source of truth for this form, not just fallbacks. This exercise is all about making a form that’s natural to use and easy to maintain.

As of this version, the form displays the user’s saved info (make sure that privacy policy is up to date, fam), and enables the user to edit their info and save it. While editing, the draft values are kept separate from the rest of the application.

But there’s still something missing.

### Something something derived state

Or is anything missing? I dunno really… the user can submit the form, and that will trigger the mutation we’ve wired up and the data will be saved in the database. Job done, right? The API sends back the data it mutated and, since we use Apollo for automagic GraphQL stuff, the updated data will be displayed in the UI and…

Oh derp.

Actually, it won’t. Hang on, gotta put my jacket back up on the hanger.

Since we we’re so smart as to hydrate the initial form state from the props, the form won’t react to prop changes from the parent. It won’t display new data after a mutation and we don’t even have cancel functionality! We just turn editing off! Oh lord, woe is me 😱

Okay okay, I’m overly dramatizing this. Of course I have the solution to all our problems, it’s what this whole blog post is about! If you’ve been paying attention lately, React 16.3 introduced a new lifecycle method: getDerivedStateFromProps. I’ll spare you the documentation, if you’re unfamiliar you should head over to React’s rather fantastic docs site and read about it.

We can solve all our problems by adding the getDerivedStateFromProps method to our form:

```javascript
static getDerivedStateFromProps(nextProps, state) {
  if (nextProps.loading) {
    return null
  }

  // Required for React 16.4: compare prev props to next props
  // and don't update if they're the same. Uses lodash methods.

  const prevProps = get(state, '_prevProps', false)

  if (prevProps && isMatch(nextProps, prevProps)) {
    return null
  }

  const nextState = reduce(
    state,
    (returnState, value, prop) => {
      if (typeof nextProps[prop] !== 'undefined') {
        return { ...returnState, [prop]: nextProps[prop] }
      }

      return returnState
    },
    state
  )

  // React 16.4: Save the props in state for the next run.
  nextState._prevProps = nextProps

  return nextState
}

state = {
  favoriteGermanElectronicaTrack: '',
  firstMemeSeen: '',
  pagerNumber: ''
}

```

Cool huh? In essence, what this does, is assign all values defined in the state from the props object into the form state. The initial state on the component is set to empty strings. The result is that the fields will display whatever comes through from the props, or just emptiness. I guess it depends on your philosophical persuasion which one you prefer, but I bet your users prefer to see the data they have and what they need to fill in.

(Note that the code above was updated to be compatible with changes in React 16.4 that made getDerivedStateFromProps run on EVERY update, not just when props changed. Even in React 16.3, it would have been good practice to compare props, as ANY update in ANY parent component above would have wiped user input. Now it works much better.)

The getDerivedStateFromProps method will now reliably update the inner state of the form component with new props when

1. The form is enabled or disabled
2. Apollo updates its store with new data from the API

and NOT when the fields are poked and prodded by the user or an update is triggered somewhere above the form in the React tree. Cancelling and displaying updated data is solved in one go. The form is now fully controlled by its parent while containing all of its own business logic.

There are probably many more things you could do here to make it more abstract, but that’s not what this blog post is about. This post is based on a real-life development process I went through today as I stumbled upon using getDerivedStateFromProps and saw it solve all my problems I had with this particular use case in a very elegant manner. I actually had more methods in there that called getDerivedStateFromProps manually when cancelling or toggling editability! Imagine my joy when I commented them out and cancelling kept working thanks to basic reactivity.

I have no idea if anyone wants to read detailed development process posts like this, but if you do, tell me on Twitter [@ddunderfelt](https://twitter.com/ddunderfelt)!
