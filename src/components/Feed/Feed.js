import React from 'react'
import { FlatList } from 'react-native'
// Fetch articles function
import { getNews } from '../../news.js'
// Article component
import Article from './Article.js'

export default class Feed extends React.Component {
  state = {
    articles: [],
    refreshing: true,
  }

  componentDidMount() {
    this.fetchNews()
  }

  fetchNews = () => {
    getNews()
      .then(articles => this.setState({articles, refreshing: false}))
      .catch(() => this.setState({refreshing: false}))
  }

  handleRefresh = () => {
    this.setState(
      {refreshing: true},
      () => this.fetchNews()
    )
  }

  render() {
    return (
      <FlatList 
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    )
  }
}
