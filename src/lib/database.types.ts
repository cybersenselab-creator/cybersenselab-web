export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string;
          display_name: string;
          is_active: boolean;
          updated_at: string;
          user_id: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          display_name?: string;
          is_active?: boolean;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          display_name?: string;
          is_active?: boolean;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      announcements: {
        Row: {
          content: string;
          created_at: string;
          id: string;
          is_published: boolean;
          publish_date: string | null;
          source_external_id: string | null;
          source_type: string | null;
          source_url: string | null;
          title: string;
        };
        ComputedFields: never;
        Insert: {
          content: string;
          created_at?: string;
          id?: string;
          is_published?: boolean;
          publish_date?: string | null;
          source_external_id?: string | null;
          source_type?: string | null;
          source_url?: string | null;
          title: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
          is_published?: boolean;
          publish_date?: string | null;
          source_external_id?: string | null;
          source_type?: string | null;
          source_url?: string | null;
          title?: string;
        };
        Relationships: [];
      };
      arastirma_alanlari: {
        Row: {
          created_at: string;
          description: string | null;
          icon: string;
          id: string;
          is_published: boolean;
          sort_order: number;
          title: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          description?: string | null;
          icon?: string;
          id?: string;
          is_published?: boolean;
          sort_order?: number;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          icon?: string;
          id?: string;
          is_published?: boolean;
          sort_order?: number;
          title?: string;
        };
        Relationships: [];
      };
      content_images: {
        Row: {
          alt_text: string | null;
          created_at: string;
          entity_id: string;
          entity_type: string;
          id: string;
          image_url: string;
          is_published: boolean;
          sort_order: number;
        };
        ComputedFields: never;
        Insert: {
          alt_text?: string | null;
          created_at?: string;
          entity_id: string;
          entity_type: string;
          id?: string;
          image_url: string;
          is_published?: boolean;
          sort_order?: number;
        };
        Update: {
          alt_text?: string | null;
          created_at?: string;
          entity_id?: string;
          entity_type?: string;
          id?: string;
          image_url?: string;
          is_published?: boolean;
          sort_order?: number;
        };
        Relationships: [];
      };
      ekip: {
        Row: {
          avatar_icon: string | null;
          created_at: string;
          email: string | null;
          expertise: string | null;
          github_url: string | null;
          id: string;
          is_published: boolean;
          linkedin_url: string | null;
          name: string;
          priority: number;
          role: string;
          scholar_url: string | null;
          sort_order: number;
          website_url: string | null;
        };
        ComputedFields: never;
        Insert: {
          avatar_icon?: string | null;
          created_at?: string;
          email?: string | null;
          expertise?: string | null;
          github_url?: string | null;
          id?: string;
          is_published?: boolean;
          linkedin_url?: string | null;
          name: string;
          priority?: number;
          role: string;
          scholar_url?: string | null;
          sort_order?: number;
          website_url?: string | null;
        };
        Update: {
          avatar_icon?: string | null;
          created_at?: string;
          email?: string | null;
          expertise?: string | null;
          github_url?: string | null;
          id?: string;
          is_published?: boolean;
          linkedin_url?: string | null;
          name?: string;
          priority?: number;
          role?: string;
          scholar_url?: string | null;
          sort_order?: number;
          website_url?: string | null;
        };
        Relationships: [];
      };
      etkinlikler: {
        Row: {
          created_at: string;
          description: string | null;
          event_date: string;
          id: string;
          is_published: boolean;
          location: string | null;
          title: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          description?: string | null;
          event_date: string;
          id?: string;
          is_published?: boolean;
          location?: string | null;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          event_date?: string;
          id?: string;
          is_published?: boolean;
          location?: string | null;
          title?: string;
        };
        Relationships: [];
      };
      instagram_imports: {
        Row: {
          announcement_id: string | null;
          attempt_count: number;
          created_at: string;
          external_media_id: string;
          id: string;
          last_error: string | null;
          media_timestamp: string;
          media_type: string;
          permalink: string | null;
          status: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          announcement_id?: string | null;
          attempt_count?: number;
          created_at?: string;
          external_media_id: string;
          id?: string;
          last_error?: string | null;
          media_timestamp: string;
          media_type: string;
          permalink?: string | null;
          status?: string;
          updated_at?: string;
        };
        Update: {
          announcement_id?: string | null;
          attempt_count?: number;
          created_at?: string;
          external_media_id?: string;
          id?: string;
          last_error?: string | null;
          media_timestamp?: string;
          media_type?: string;
          permalink?: string | null;
          status?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "instagram_imports_announcement_id_fkey";
            columns: ["announcement_id"];
            isOneToOne: false;
            referencedRelation: "announcements";
            referencedColumns: ["id"];
          },
        ];
      };
      instagram_sync_runs: {
        Row: {
          discovered_count: number;
          finished_at: string | null;
          id: string;
          imported_count: number;
          last_error: string | null;
          retry_count: number;
          skipped_count: number;
          started_at: string;
          status: string;
          trigger: string;
        };
        ComputedFields: never;
        Insert: {
          discovered_count?: number;
          finished_at?: string | null;
          id?: string;
          imported_count?: number;
          last_error?: string | null;
          retry_count?: number;
          skipped_count?: number;
          started_at?: string;
          status?: string;
          trigger: string;
        };
        Update: {
          discovered_count?: number;
          finished_at?: string | null;
          id?: string;
          imported_count?: number;
          last_error?: string | null;
          retry_count?: number;
          skipped_count?: number;
          started_at?: string;
          status?: string;
          trigger?: string;
        };
        Relationships: [];
      };
      instagram_sync_state: {
        Row: {
          initial_sync_completed: boolean;
          last_seen_media_id: string | null;
          last_seen_media_timestamp: string | null;
          last_success_at: string | null;
          lock_token: string | null;
          locked_until: string | null;
          singleton_key: boolean;
          token_expires_at: string | null;
        };
        ComputedFields: never;
        Insert: {
          initial_sync_completed?: boolean;
          last_seen_media_id?: string | null;
          last_seen_media_timestamp?: string | null;
          last_success_at?: string | null;
          lock_token?: string | null;
          locked_until?: string | null;
          singleton_key?: boolean;
          token_expires_at?: string | null;
        };
        Update: {
          initial_sync_completed?: boolean;
          last_seen_media_id?: string | null;
          last_seen_media_timestamp?: string | null;
          last_success_at?: string | null;
          lock_token?: string | null;
          locked_until?: string | null;
          singleton_key?: boolean;
          token_expires_at?: string | null;
        };
        Relationships: [];
      };
      oduller: {
        Row: {
          color_scheme: string | null;
          created_at: string;
          description: string | null;
          id: string;
          is_published: boolean;
          sort_order: number;
          title: string;
          year: number;
        };
        ComputedFields: never;
        Insert: {
          color_scheme?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          is_published?: boolean;
          sort_order?: number;
          title: string;
          year: number;
        };
        Update: {
          color_scheme?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          is_published?: boolean;
          sort_order?: number;
          title?: string;
          year?: number;
        };
        Relationships: [];
      };
      ortaklar: {
        Row: {
          created_at: string;
          icon: string;
          id: string;
          is_published: boolean;
          name: string;
          sort_order: number;
          url: string | null;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          icon?: string;
          id?: string;
          is_published?: boolean;
          name: string;
          sort_order?: number;
          url?: string | null;
        };
        Update: {
          created_at?: string;
          icon?: string;
          id?: string;
          is_published?: boolean;
          name?: string;
          sort_order?: number;
          url?: string | null;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          created_at: string;
          date_range: string | null;
          demo_url: string | null;
          description: string;
          funder: string | null;
          github_url: string | null;
          id: string;
          image_url: string | null;
          is_published: boolean;
          progress_pct: number;
          status: string;
          title: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          date_range?: string | null;
          demo_url?: string | null;
          description: string;
          funder?: string | null;
          github_url?: string | null;
          id?: string;
          image_url?: string | null;
          is_published?: boolean;
          progress_pct?: number;
          status?: string;
          title: string;
        };
        Update: {
          created_at?: string;
          date_range?: string | null;
          demo_url?: string | null;
          description?: string;
          funder?: string | null;
          github_url?: string | null;
          id?: string;
          image_url?: string | null;
          is_published?: boolean;
          progress_pct?: number;
          status?: string;
          title?: string;
        };
        Relationships: [];
      };
      site_ayarlari: {
        Row: {
          key: string;
          updated_at: string;
          value: string;
        };
        ComputedFields: never;
        Insert: {
          key: string;
          updated_at?: string;
          value: string;
        };
        Update: {
          key?: string;
          updated_at?: string;
          value?: string;
        };
        Relationships: [];
      };
      yayinlar: {
        Row: {
          authors: string;
          created_at: string;
          doi_url: string | null;
          id: string;
          is_published: boolean;
          pdf_url: string | null;
          pub_type: string;
          pub_year: number;
          title: string;
          venue: string;
        };
        ComputedFields: never;
        Insert: {
          authors: string;
          created_at?: string;
          doi_url?: string | null;
          id?: string;
          is_published?: boolean;
          pdf_url?: string | null;
          pub_type?: string;
          pub_year: number;
          title: string;
          venue: string;
        };
        Update: {
          authors?: string;
          created_at?: string;
          doi_url?: string | null;
          id?: string;
          is_published?: boolean;
          pdf_url?: string | null;
          pub_type?: string;
          pub_year?: number;
          title?: string;
          venue?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      admin_assert_image_entity: {
        Args: { p_entity_type: string };
        Returns: undefined;
      };
      admin_can_manage_research_images: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      admin_create_record: {
        Args: { p_data: Json; p_table: string };
        Returns: Json;
      };
      admin_delete_record: {
        Args: { p_id: string; p_table: string };
        Returns: Json;
      };
      admin_get_instagram_sync_status: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      admin_get_table_meta: {
        Args: { p_table: string };
        Returns: {
          insert_cols: string[];
          order_by: string;
          pk_col: string;
          pk_type: string;
          record_def: string;
          table_name: string;
          update_cols: string[];
        }[];
      };
      admin_is_admin: { Args: Record<PropertyKey, never>; Returns: boolean };
      admin_list_record_images: {
        Args: { p_entity_ids: string[]; p_entity_type: string };
        Returns: Json;
      };
      admin_list_records: { Args: { p_table: string }; Returns: Json };
      admin_me: { Args: Record<PropertyKey, never>; Returns: Json };
      admin_move_record: {
        Args: { p_id: string; p_source_table: string; p_target_table: string };
        Returns: Json;
      };
      admin_require_admin: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      admin_set_record_images: {
        Args: { p_entity_id: string; p_entity_type: string; p_images: Json };
        Returns: Json;
      };
      admin_update_record: {
        Args: { p_data: Json; p_id: string; p_table: string };
        Returns: Json;
      };
      admin_validate_json_keys: {
        Args: { p_allowed: string[]; p_data: Json };
        Returns: undefined;
      };
      claim_instagram_sync_run: {
        Args: {
          p_lease_seconds: number;
          p_lock_token: string;
          p_trigger: string;
        };
        Returns: Json;
      };
      cleanup_instagram_sync_history: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      finish_instagram_sync_run: {
        Args: {
          p_discovered_count: number;
          p_imported_count: number;
          p_initial_sync_completed: boolean;
          p_last_error: string;
          p_last_seen_media_id: string;
          p_last_seen_media_timestamp: string;
          p_lock_token: string;
          p_retry_count: number;
          p_run_id: string;
          p_skipped_count: number;
          p_status: string;
        };
        Returns: undefined;
      };
      import_instagram_announcement: {
        Args: {
          p_content: string;
          p_external_media_id: string;
          p_images: Json;
          p_media_timestamp: string;
          p_media_type: string;
          p_permalink: string;
          p_title: string;
        };
        Returns: Json;
      };
      instagram_require_service_role: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      instagram_sanitize_error: { Args: { p_error: string }; Returns: string };
      mark_instagram_import: {
        Args: {
          p_external_media_id: string;
          p_last_error: string;
          p_media_timestamp: string;
          p_media_type: string;
          p_permalink: string;
          p_status: string;
        };
        Returns: undefined;
      };
      stage_initial_instagram_imports: {
        Args: {
          p_items: Json;
          p_last_seen_media_id: string;
          p_last_seen_media_timestamp: string;
          p_lock_token: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
