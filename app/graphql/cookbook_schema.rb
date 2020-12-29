# frozen_string_literal: true

class CookbookSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections

  def self.id_from_object(object, type, _ctx)
    GraphQL::Schema::UniqueWithinType.encode(type.graphql_name, object.id)
  end

  def self.object_from_id(id, _ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    Object.const_get(type_name).find(item_id)
  end

  def self.resolve_type(_type, obj, _ctx)
    Object.const_get("Types::#{obj.class.name}Type")
  end
end
